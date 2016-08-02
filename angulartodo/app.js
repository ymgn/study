angular.module('App', []).controller('MainController',['$scope','$filter',function($scope,$filter){
    $scope.todos = [];
    $scope.newTitle = '';
    $scope.addTodo = function () {
        $scope.todos.push({
            title: $scope.newTitle,
            done:false
        });
        $scope.newTitle = '';
    };

    //フィルタリング条件モデル
    $scope.filter = {
        done: { done: true},    //完了のみ
        remaining: { done: false}//未了のみ
    };

    //現在のフィルタの状態モデル
    $scope.currentFilter = null;

    //フィルタリング条件を変更するメソッド
    $scope.changeFilter = function(filter){
        $scope.currentFilter = filter;
    };

    var where = $filter('filter'); // filter フィルタ関数の取得
    $scope.$watch('todos', function(todos) {
                // todos　が増減したり各要素のプロパティが変更された時に実行される
      var length = todos.length;

      $scope.allCount = length;                                   // 総件数モデル
      $scope.doneCount = where(todos, $scope.filter.done).length; // 完了件数モデル
      $scope.remainingCount = length - $scope.doneCount;          // 未了件数モデル
    }, true);
}]);
