# MERN_Bookstore_application

In the world of software development there lots of improvement in the area of Architectural design and principles. The philosophies and implementation details are changing as the people guiding the development of the application. Web services are one such area where architects must lean on their creative side and hope that their solutions are still successful. The reason why we selected online Bookstore web service is everybody walking down the street has some idea about bookstores. The objective of this project is to develop an e- book store where books can be bought from the comfort of home through the Internet. The main objective of the project is to create an online book store that allows users to search and purchase a book based on title, author and subject. The selected books may be collected in a shopping cart. At checkout time, the items in the shopping cart will be presented as an order. At that time, more information will be needed to complete the transaction. Usually, the customer will be asked to fill or select a billing address, a shipping address, a shipping option, and payment information such as credit card number. Online book store application enables vendor to setup online book store, customers to browse through the books, and a system administrator to approve and reject requests for new books and maintain lists of book categories. There are various things a user can do, bookmark and share favorite books. Entire web system has a user verification and validation. Ultimate aim of this project is to achieve good user experience. A wide future scope of this project would be to give suggestion to users regarding what books he should buy based on his past orders.

## Book Management System aims at automation of the following processes -
1. Anonymous users 
  * Login/Register 
  * View all books //Also based on newest, best rated and most purchased
  * View books details, rating and comments //search
2. Authenticated users 
  * Add books to cart
  * Rate books 
  * Comment books 
  * View user profiles 
  * Checkout
  * View his own purchases history 
  * Create favourite books list 
  * Receipt Generation and Cart
3. Admin users 
  * Add books to the store 
  * Edit books 
  * Delete books 
  * Edit/Delete offensive user comments 
  * Log generation
  
  ## Software Resource Requirements
• Windows 10
• MongoDB
• JavaScript
• Angular
• NodeJS
• ExpressJS

## HIGH LEVEL ARCHITECTURE BLOCK DIAGRAM
<img width="454" alt="image" src="https://user-images.githubusercontent.com/37813295/220190149-5219bb8e-2805-4d96-a9bc-ee2025960b63.png">

##  COLLECTIONS AND ATTRIBUTES
1. User -

a. Username 
b. Email 
c. Password 
d. isAdmin 
e. isCommentBlocked 
f. commentCount 
g. roles 
h. cart 
i. favoriteBooks 
j. receipt 

2. Book -

a. title 
b. author 
c. genre 
d. year 
e. description 
f. cover 
g. pageCount 
h. price 
i. currentRating 
j. purchaseCount 
k. comments 

3. Cart -

a. username 
b. books 
c. totalPrice 

4. Comments -

a. Username 
b. Book 
c. Content 
d. Rating 
e. createDate 

5. log -

a. type 
b. description
b. date 
c. status

## Images
<img width="461" alt="image" src="https://user-images.githubusercontent.com/37813295/220190565-fe2b1938-46d9-4931-af53-a927a41859ae.png">

<img width="365" alt="image" src="https://user-images.githubusercontent.com/37813295/220190620-c09cdc83-7bf9-4689-931e-9d3420c2eeb6.png">

<img width="265" alt="image" src="https://user-images.githubusercontent.com/37813295/220190659-0e93f4d6-408d-4c97-8a81-c8a044997efa.png">

<img width="342" alt="image" src="https://user-images.githubusercontent.com/37813295/220190769-e90d1508-6c2d-4597-b025-28863a5390b3.png">

<img width="506" alt="image" src="https://user-images.githubusercontent.com/37813295/220190829-abafc218-acf0-437f-8e8b-093ba049f9a6.png">

<img width="512" alt="image" src="https://user-images.githubusercontent.com/37813295/220190922-6bbf6d3d-4248-4dc8-9c55-a0a2bf181368.png">

<img width="512" alt="image" src="https://user-images.githubusercontent.com/37813295/220191013-1613716a-a6fd-4433-b5d3-d0b2520fb9da.png">

<img width="508" alt="image" src="https://user-images.githubusercontent.com/37813295/220191121-9be4e259-448a-4f54-ab84-22f9feb5582b.png">

<img width="513" alt="image" src="https://user-images.githubusercontent.com/37813295/220191191-22378cd0-5231-4ef0-8fd3-756abb7aa7e5.png">

-------------------------------------------------------------------------------------------------------------------------------------------
