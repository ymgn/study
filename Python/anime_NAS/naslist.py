# -*- coding: utf-8 -*-
import os
import json

naslist = []

naslist = os.listdir(u'/Volumes/Tomo/アニメまとめ')
##このままだと出力されるのがダブルクォーテ付きなので整形できず、使いにくいので変える必要ある
jsonstring = json.dumps(naslist,ensure_ascii=False,indent=2)

print(jsonstring)
f = open("anime-nas.json", "w")
json.dump(jsonstring, f, ensure_ascii=False,indent=2)
