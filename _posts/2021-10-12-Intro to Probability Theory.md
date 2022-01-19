---
title: Intro to Probability Theory
date: 2020-10-12 18:40:10 +0400
category: [Tutorial]
tags: [statistics]     # TAG names should always be lowercase
math: true
---

Probability theory has started to develop since 17 century as a tool to analyze gambling games. It allows to model a random experience whose outcome can not be predicted with certainty. Today it has a wide applications in prediction, risk assessment and modeling. This post is going to be a basic overview of some important aspects in probability theory.

## Probabilistic model

### Definition

To put in naive definition, probability function $P$ of a certain event is a number of **favorable** outcomes to **all** the possible outcomes. The range of probability function is between 0 and 1. The total number of outcomes is often noted as $\Omega$ (called `certain event`) and $P(\Omega)=1$. So the general formula is given by:

$$P(A) = \dfrac{card(A)}{card(\Omega)}$$

Followed from set theory, to find the probability of event A or event B to occur we use:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

It is important to metion about two particular relations between the events.
1. Compatibility
   
    The events are said **incompatible** if they cannot occur at the same time. For example, a bag contains red and green balls. When choosing the ball it can be either red or green, not both at the same time. So event of ball being red and event of ball being red are incompatible.
    
    $$P(A \cap B) = \emptyset$$

2. Dependence

	The events are called **independent** when they do not depend on each other. For example, rolling a dice and tossing a coin are independent events as the outcomes of one of them does not affect to other event. On the other hand, buying a soda after having a lunch may have different probability that buying a soda without having lunch.
	
	$$P(A \cap B) = P(A)P(B)$$


### Conditional Probability
When the event B happens under condition of A we get:

$$P(B | A) = \dfrac{P(A \cap B)}{P(A)}$$

### Total Probability law

$$P(B) = P(B | A)P(A) + P(B | A^{c})P(A^{c})$$

### Bayes formula

$$P(A|B) = \dfrac{P(B|A)P(B)}{P(B | A)P(A) + P(B | A^{c})P(A^{c}) }$$

## Discrete Random Variables

### Definition

A **random variable**, often denoted as $X$, is a variable that defines as a numerical value possible outcomes of a random event. Random variables can be discrete (finite) and continuous (infinite).

For example, we draw successfully 3 balls from a bag containing red, green and blue balls. We let random variable $X$ to correspond to the number of times a green ball appears in the result. 
Let us draw the table with possible events $\omega$, random variable $X$, and the number of events for each value of a random variable:


|     $x$      |                    0                    |                              1                              |              2              |        3        |
| :----------: | :-------------------------------------: | :---------------------------------------------------------: | :-------------------------: | :-------------: |
|     $w$      | RRR RRB RBR <br>RBB BRR BRB <br>BBR BBB | RRG RGR RGB <br>RBG GRR GRB <br>GBR GBB BRG <br>BGR BGB BBG | RGG GRG GGR <br>GGB GBG BGG |       GGG       |
| # of events  |                    8                    |                             12                              |              6              |        1        |
| $P[X_{i}=x]$ |             $\dfrac{8}{27}$             |                      $\dfrac{12}{27}$                       |       $\dfrac{6}{27}$       | $\dfrac{1}{27}$ |

To analyze the distribution of variables we often need some metrics.



The expected value, also called expectation or mean, is used to calculate the average outcome of the distribution and we define it as :

$$E[X] = \sum_k kP[X=k]$$

where k is numerical value of X.



The **variance** defines how much the distribution is spread out, we define it as:

$$Var[X] = E[(X - E[X])^2] = \sum_k (k - E[X])^2 = E[X^2] - E[X]^2$$



The **standard deviation** is given by : $$\sigma_x = \sqrt{Var[X]}$$



Covariance and correlation are used to understand the relationship between two variables. 

We define covariance as :

$$Cov(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]$$

Correlation is a standardized form of covariance and is defined as :

$$Cor(X, Y) = \dfrac{Cov(X, Y)}{\sqrt{Var(X)Var(Y)}}$$



### Bernoulli Trial

It is a random experiment which has exactly two possible outcomes : *success* and *failure*. We associate a random variable $X$ which takes two values, 1 in case of success, and 0 in case of failure. 

$$P[X=1] = p$$ 

$$P[X=0] = q = 1 - p$$

### Bernoulli Distribution

Bernoulli process consists in the repetition of the same Bernoulli trial $n$ times under the same conditions. 

We let X be a random variable referring to the number of obtained success during Bernoulli process of $n$ trials. Then $X$ follows a **Bernoulli distribution** of parameters $(n, p)$, denoted $B(n, p)$.

$$P[X=k] = \binom{n}{r}p^k(1-p)^{n-k}$$

$$E[X] = np$$

$$Var[X] = np(1-p)$$

It can be used in solving questions with replacement.

### Hypergeometric Distribution

The hypergeometric distribution describes the probability of $k$ successes (with specific feature) in $n$ draws ($k \leq $n), without replacement from a population of size $N$ containing $K$ objects with the specific feature. It is denoted as $K(N, K, n)$.

$$P[X=k] = \dfrac{\binom{K}{k} \binom{N-K}{n-k}}{\binom{N}{n}}$$

$$E[X] = n \dfrac{K}{N}$$

$$Var(X) = n \dfrac{K}{N} \dfrac{N-K}{N} \dfrac{N-n}{N-1}$$

### Geometric Distribution

A geometric distribution corresponds to the number of times a random experiment has to be repeated until having the first success. It is a Bernoulli process where the nubmber of successes is 1 and the number of trials $X$ is random. It is denoted as $G(p)$.

$$\forall k = 1,2,..., P[X=k] = p(1-p)^{k-1}$$ 

$$E[X] = \dfrac{1}{p}$$

$$Var[X] = \dfrac{1-p}{p^2}$$

where $p$ is the proability of successes.

### Poisson Distribution

It can be used as an approximation to the Binomial distribution when $np \le 10$ and $n \ge 50$. We say that a random variable $X$ follows the Posson distribution of parameter $\lambda$ if

$$\forall k \in \mathbb{N}, P[X=k] = \dfrac{\lambda^k}{k!}e^{-\lambda}$$

And,

$$E[X] = Var[X] = \lambda$$



### Uniform Distribution

We say that a random variable $X$ takes $n$ possible values $k_1, k_2,..., k_n$ follows a uniform distribution if 

$$\forall i = 1,...,n, P[X=k_i] = \dfrac{1}{n}$$

And,

$$E[X] = \dfrac{n+1}{2}$$

$$Var[X] = \dfrac{n^2-1}{12}$$

## Continuous Random Variables

### Definition

A continuous random variable can take infinitely many values. For example: measuring time, distance, temperature, etc.

We say that $f$ is a **probability density function** (p.d.f.) of the continuous random variable $X$ if 

$$\forall x \in \mathbb{R} f(x) \ge 0 \space \text{and} \int_{\mathbb{R}} f(x) \, dx = 1$$

The probability of a continuous random variable $X$ is defined by meas of the p.d.f. as:

$$\forall a, b \in \mathbb{R}, P[a \le X \le b] =  \int_a^b f(x) \, dx $$

For a continuous random variable $X$, the function $F$ defined as:

$$\forall x \in \mathbb{R}, F(x) = P[X \le x] = P[X < x] = \int_{-\infty}^x f(t) \, dt $$

is called the **cumulative distribution function** of $X$.

We have,

$$P[a \le X \le b] = P[a < X < b] = F(b) - F(a)$$

The **expectation** of $X$ is defined as:

$$E[X] = \int_{-\infty}^{+\infty} xf(x) \, dx$$

And the **variance** of $X$ is:

$$Var[X] = E[X^2] - E[X]^2$$



### Normal Distribution

##### Standard Normal function

We say that continuous random variable $X$ follows the standard normal distribution, denoted $N(0, 1)$, if its p.d.f. $f$ is given by:

$$f(x)  = \dfrac{1}{\sqrt{2\pi}}exp(-\dfrac{x^2}{2}), \forall x \in \mathbb{R}$$

$$P[a \le X \le b] = \dfrac{1}{\sqrt{2\pi}} \int_a^b exp(-\dfrac{x^2}{2}) \, dx = \phi(b) - \phi(a)$$

where $\phi$ is the cumulative distribution function of $X$ which corresponds to the primitive of $f$. We usually do not compute it ourselves but have the table with prepared values.

$$E[X] = \mu = 0 \text{ and } Var[X] = \sigma = 1$$

![Normal-Distribution-img](https://miro.medium.com/max/1838/1*IdGgdrY_n_9_YfkaCh-dag.png)
_Bell curve [[1]](#references)_

##### General normal function

More general form of the normal distribution is given by:

$$f(x) = \dfrac{1}{\sqrt{2\pi}\sigma} exp(- \dfrac{(x-\mu)^2}{2\sigma^2}), \forall x \in \mathbb{R}$$

![General-Normal-Distribution-img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Normal_Distribution_PDF.svg/1200px-Normal_Distribution_PDF.svg.png){: width="500"}
_General Normal Distribution [[2]](#references)_

$$E[X] = \mu \text{ and } Var[X] = \sigma$$



If continuous random variable $X$ follows the normal p.d.f. $N(\mu, \sigma)$, then continuous random variable $Z = \dfrac{X-\mu}{\sigma}$ follows the standard normal p.d.f. $N(0, 1)$.



### Exponential Distribution

We say that continuous random variable $X$ follows an exponential distribution for $\lambda > 0$, denoted $\mathcal{E}(\lambda)$, if its p.d.f. is given by:

$$
f(x) =
\begin{cases}
0,  & \text{if } x < 0 \\[2ex]
\lambda exp(-\lambda x), & \text{if } x \ge 0
\end{cases}
$$

$$E[X] = \dfrac{1}{\lambda}$$

$$Var[X] = \dfrac{1}{\lambda^2}$$

![Exponential-Distribution-img](https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Exponential_probability_density.svg/1200px-Exponential_probability_density.svg.png){: width="500"}
_Exponential Distribution [[3]](#references)_

### Continuous Uniform Distribution
Let $a, b \in \mathbb{R}$. We say that a continuous random variable $X$ follows a uniform distribution, denoted $U(a,b)$, if its p.d.f. $f$ is given by:

$$
f(x) =
\begin{cases}
\dfrac{1}{b-a},  & \text{for } a \le x \le b \\[2ex]
0, & \text{for } x < a \text{ or } x > b
\end{cases}
$$

$$ E[X] = \dfrac{1}{2}(a+b)$$

$$ Var[X] = \dfrac{1}{12}(b-a)^2$$

![Continuous-Uniform-Distribution-img](https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Uniform_Distribution_PDF_SVG.svg/1200px-Uniform_Distribution_PDF_SVG.svg.png){: width="500"}
_Continuous Uniform Distribution [[4]](#references)_
### Laplace Distribution

Let $\mu \in \mathbb{R} \text{ and } b > 0$. We say that a continuous random variable $X$ follows a Laplace distribution, denoted $L(\mu, b)$, if its p.d.f. $f$ is given by:

$$
f(x) = \dfrac{1}{2b} exp(-\dfrac{|x - \mu|}{b})= \dfrac{1}{2b}
\begin{cases}
exp(-\dfrac{\mu - x}{b}),  & \text{for } x < \mu \\[2ex]
exp(-\dfrac{x - \mu}{b}), & \text{for } x \ge \mu
\end{cases}
$$

$$E[X] = \mu$$

$$Var[X] = 2b^2$$

where $\mu$ is a location parameter and $b$ is a scale parameter.

![Laplace-Distribution-img](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Laplace_pdf_mod.svg/325px-Laplace_pdf_mod.svg.png)
_Laplace Distribution [[5]](#references)_

## References

[1] [Explaining the 68-95-99.7 rule for a Normal Distribution](https://towardsdatascience.com/understanding-the-68-95-99-7-rule-for-a-normal-distribution-b7b7cbf760c2)

[2] [Normal Distribution - Wikipedia](https://en.wikipedia.org/wiki/Normal_distribution)

[3] [Exponential Distribution - Wikipedia](https://en.wikipedia.org/wiki/Exponential_distribution)

[4] [Continuous Uniform Distribution - Wikipedia](https://en.wikipedia.org/wiki/Continuous_uniform_distribution)

[5] [Laplace Distribution - Wikipedia](https://en.wikipedia.org/wiki/Laplace_distribution)