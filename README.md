# Optimize Visual Status in S.T.E.P. Scenario based on Mixed-Integer Linear Programming
We want to find out a most efficient way to use STEP status point. Since the point cost increasing by a linear manner and the point must be interger, we can refer this task as an integer linear programming problem.

We will first model our objective function, in this article we will take vi as an example, since the author mainly use VI arusuto.

## Problem Formulation

**Status is everything!**
We want to maximize Vi status, $\max{Vi}$, without any constraint violation.


## Constraint

### Vi_up_constraint

In SEICHYOU panel, you can click Vi up buttom for at most 230 times, and the cost varies in different range. To optimize $Vi$, we need to model Vi_up_costraint as a piecewize linear cost.

$ViPtCost(ViUp) = \left\{
\begin{array}{l}
   10*ViUp, 0\leq ViUp \leq 30 \\
   300+15*(ViUp-30), 30\leq ViUp \leq 60 \\
   750+15*(ViUp-60), 60\leq ViUp \leq 90 \\
   1350+15*(ViUp-90), 90\leq ViUp \leq 120 \\
   2250+15*(ViUp-120), 120\leq ViUp \leq 150 \\
   3450+15*(ViUp-150), 150\leq ViUp \leq 230 
\end{array}
\right.$

$TeamworkPtCost(ViUp) = \left\{
\begin{array}{l}
   0, 0\leq ViUp \leq 30 \\
   0, 30\leq ViUp \leq 60 \\
   1*(ViUp-60), 60\leq ViUp \leq 90 \\
   30+2*(ViUp-90), 90\leq ViUp \leq 120 \\
   90+3*(ViUp-120), 120\leq ViUp \leq 150 \\
   180+4*(ViUp-150), 150\leq ViUp \leq 230 
\end{array}
\right.$

