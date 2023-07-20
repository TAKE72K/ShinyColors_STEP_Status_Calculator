# S.T.E.P.ステ振り計算機

## 使用方法

學完該學的アビリティ之後，輸入特化點數及養成卡的上限panel狀況，按頁面底部計算。

計算機會算出特化最大值與需要的成長回數。

## 計算方法

<details>
  <summary>線性規劃</summary>
  最大化特化ステ，就是一個[整數線性最佳化問題(integer linear programming, ILP)](https://en.wikipedia.org/wiki/Integer_programming)。
  透過將數值與按成長的回數，可以計算出可能最高的特化ステ(如果表達式是對的話)。
</details>
