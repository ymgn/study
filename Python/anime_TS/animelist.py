import scrapelib
from bs4 import BeautifulSoup

#一分あたり10リクエストまで
s = scrapelib.Scraper(requests_per_minute=10)
#公式放送のアニメのページを1~3まで見る
url = "http://live.nicovideo.jp/search?track=&sort=recent&date=&keyword=%E3%82%A2%E3%83%8B%E3%83%A1&filter=%3Areserved%3A+%3Aofficial%3A&kind=&page="
for page in range(1,2):
    r=s.get(url+str(page))
    #キレイに整える
    soup = BeautifulSoup(r.text,"lxml")
    data = []
    #全てから１件分のまとまりの配列を出す
    #find_allは当てはまる全てを配列にして出す findは初めの1件目だけヒットする
    animes = soup.find_all("div",class_="result_item cmn")
    count = 0
    #配列から１件分ずつ出す
    print(str(page) + "ページ目")
    for anime in animes:
        #配列にまとめる用のリスト
        anime_in = {}
        #１件分の中からタイトルだけを抽出
        title_all = anime.find("p",class_="search_stream_title")
        title = title_all.find("a").get("title")
        #上映会と最後につく番組だけ抽出する
        if(title[-3:]=="上映会"):
            #タイトルを入れる
            anime_in["title"] = title

            #日付と日時のみを抽出
            date = anime.find("p","status")
            #土日の日付だけ中にspanが入るため判定する
            if(date.find("span")is None):
                anime_in["date"] = date.string[7:-7]
            else:
                #中に子要素が１つでも存在する場合.stringが使えないのでcontentsで指定シなければならない
                anime_in["date"] = date.contents[0][7:18]+date.find("span").string+date.contents[2][:-7]
            #タイムシフト数を抽出
            if(anime.find("span","number")is not None):
                ts_number = anime.find("span","number")
                anime_in["ts_number"] = ts_number.string
            else:
                ts_number = "TSできません";
                anime_in["ts_number"] = ts_number

            #print(ts_number.string)

            data.append(anime_in)
            #print(data)

        #検索結果である40件分だけ抽出
        if(count>=39):
            break
        count += 1
print(data)
