#Monolithic-

Monolithic applications have one large code base and lack modularity. If developers want to update or change something, they access the same code base. So, they make changes in the whole stack at once.

![alt text](https://d2m6ke2px6quvq.cloudfront.net/uploads/2020/09/11/3f3de3fc-f3a8-4cd1-81cd-518496f59141.jpg)

##Strengths of the Monolithic Architecture
-Less cross-cutting concerns. 
-Easier debugging and testing.
-Simple to deploy. 
-Simple to develop. 

##Weaknesses of the Monolithic Architecture
-Understanding. When a monolithic application scales up, it becomes too complicated to understand. Also, a complex system of code within one application is hard to manage.
-Making changes. It is harder to implement changes in such a large and complex application with highly tight coupling. Any code change affects the whole system so it has to be thoroughly coordinated. This makes the overall development process much longer.
-Scalability. You cannot scale components independently, only the whole application.
-New technology barriers. It is extremely problematic to apply a new technology in a monolithic application because then the entire application has to be rewritten.

#Microservices-

The microservice architectural style is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API.

![alt text](https://d2m6ke2px6quvq.cloudfront.net/uploads/2020/09/11/2381c271-4fde-4cc1-94d9-a2e2d72a81c0.jpg)

##Strengths of the Microservice Architecture
-Independent components
-Easier Understanding
-Better Scalability
 
##Weaknesses of the Microservice Architecture
-Extra complexity
-System Distubution
-Testing


Resources-
https://www.geeksforgeeks.org/monolithic-vs-microservices-architecture/
https://www.n-ix.com/microservices-vs-monolith-which-architecture-best-choice-your-business/
