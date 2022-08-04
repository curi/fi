thinking about https://www.lesswrong.com/posts/9AWoAAA59hN9PEwT7/why-would-code-english-or-low-abstraction-high-abstraction?commentId=8o3cGqb7C5SjtYt93



the number of errors is <= sqrt(2 * Q * a^2)

Q = sum of non-optimal predictions
s/S = squared euclidean distance
    (xi - mu)^2
    how "not ordinary" it is; sorta like hard to vary
a/V = abs distance




??
in general number of errors is maximised for correct theories ~= a * sqrt(2Q)




for a deterministic hypothesis

- we have some elimination step at some point, not necessarily each bit (potentially)
- each elim.step we remove approx 1/2 of the theories
- but elim.steps get less frequent the more detailed we get
- so time to next elim.step roughly doubles
- so we start with 2^n theories of length n, which is like 2^(n+1) theories total (so approx 2^n anyway)
- say we eliminate nothing on the first step (alt: offset numbers by one)
- in general we eliminate 1/2 after the 1st step (2^1 = 2; 2*1/2 = 1)
  - happens after t=1
- we eliminate 1/4 of total (1/2 remaining) after 2nd step (2^2 = 4; 4*1/4 = 1)
  - but this step takes twice as long, so duration is 2, t=1+2
- we eliminate 1/8 of total after 3rd step
  - takes 4 times as long, so duration is 4, t=1+2+4=7=(2^(3+1))-1


