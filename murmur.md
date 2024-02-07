## Abstract
We want to find out a most efficient way to spend STEP points and use them to maximize our idol's status. 
Since the cost grows in a linear manner, it can be solved with linear optimization.
We will first model objective function as well as cost, then write a linear expresion so the problem can be solved by open-source solver.

## Problem Formulation

**Status is everything!**
Generally speaking, we prefer to focus on increasing a specific status when produce an idol. 
So the goal is pretty simple, find a way of spending point that maximize the status, or
$$\text{Maximize} \ v$$


## Constraint

### Vi_up_constraint

In SEICHYOU panel, you can click Vi up buttom for at most 230 times, and the cost varies in different range. To optimize $Vi$, we need to model Vi_up_costraint as a piecewize linear cost.

$$ViPtCost(ViUp) = \left\{
\begin{array}{l}
   10 * ViUp, 0\leq ViUp \leq 30 \\
   300+15*(ViUp-30), 30\leq ViUp \leq 60 \\
   750+15*(ViUp-60), 60\leq ViUp \leq 90 \\
   1350+15*(ViUp-90), 90\leq ViUp \leq 120 \\
   2250+15*(ViUp-120), 120\leq ViUp \leq 150 \\
   3450+15*(ViUp-150), 150\leq ViUp \leq 230 
\end{array}
\right.$$

$$TeamworkPtCost(ViUp) = \left\{
\begin{array}{l}
   0, 0\leq ViUp \leq 30 \\
   0, 30\leq ViUp \leq 60 \\
   1*(ViUp-60), 60\leq ViUp \leq 90 \\
   30+2*(ViUp-90), 90\leq ViUp \leq 120 \\
   90+3*(ViUp-120), 120\leq ViUp \leq 150 \\
   180+4*(ViUp-150), 150\leq ViUp \leq 230 
\end{array}
\right.$$

