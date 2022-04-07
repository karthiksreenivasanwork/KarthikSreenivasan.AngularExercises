
# KarthikSreenivasan.AngularExercises

This project contains coding exercises to understand the different concepts of Angular 13 and beyond.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## User Interface
![AngularExercises - User Interface](/src/assets/images/KarthikSreenivasan.AngularExercises-UserInterface.jpg)

## My LinkedIn Profile
Please visit my LinkedIn profile page [here.](https://www.linkedin.com/in/karthiksreenivasan/)

## Project Description
Please find the description of each Angular exercise along with its detailed requirements below

1. **Exercise Name: Product Tracker**
  - Angular Concept: Binding
  - Requirements
    - In this component, please have two buttons to add or remove products. Adding or removing a product must update the total product count in the shopping cart (depicted in blue).
    - Have a maximum cart limit of 5.
    - When the maximum limit has been reached, disable - the 'Add Item' button.
    - When there are no items in the cart, disable - the 'Remove Item' button.
    
2. **Exercise Name: List Products**
  - Angular Concept: Directives
  - Requirements
    - Display a catalog of products available.
    - Have a provision to add new products to the existing catalog.
    - Implement a toggle indicator control. This indicator's behavior would be to hide or reveal itself. Every alternate item will hide the toggle or reveal itself otherwise.
    - When the product count reaches 10 items and beyond, add a new style to the row using - Angular's 'ngClass' attribute directive.
    - When the product reaches 13 items and beyond, add a new style to the row using - Angular's 'ngStyle' attribute directive as well.
   
3. **Exercise Name: Social Media Channels**
  - Angular Concept: ngSwitch Directive
  - Requirements
    - Create a dropdown control that has 4 elements and corresponding content to display respectively.
    - For each selection of the elements in the dropdown, load the corresponding content using the ngSwitch directive.

4. **Exercise Name: Payment Manager Tool**
  - Angular Concept: It is a mini-project with multiple concepts enumerated below
  - Requirements
    - The first component will accept new payments. Data to capture will include customer name, price, and card number.
    - The second component will list the details of the payments.
    - The column to be displayed are as follows
      - S.No: Dynamic row ID.
      - Name: Name of the customer.
      - Price: Price paid.
      - Card Number: The card number used to make this payment.
      - Operations: The user can edit or delete this record using the edit or delete button.
      
    - Payment details must be tracked with the help of a service.
    - Display the count of the total payments made.
    - Search payment data by the column name using a custom pipe. The price column will have to match the exact number but the other columns can match the search value.
    - Mask the credit card number on display using a custom pipe.
    - Display 'Visa' image if the card number starts with 50 or above and 'Master' otherwise. The minimum search criteria is 2 digits.
    - Custom Directive - Display a hyphen after every 4 digits while displaying the card number.
    - Custom Pipe - While displaying the name column, the first letter must always start with a capital.
    - Move the search UI controls from 'List Payment' to its parent component. This has to be done using @Input for the 'List Payment' to receive the criteria from its parent.
    - Apply template-driven form validations.
    
5. **Exercise Name: Text Transformation Types**
  - Angular Concept: Custom Pipes (Text Transformation)
  - Requirements
    - Ordinal Pipe: Add the suffix st, nd, rd, or th based on the number.
    - Title Only Case: The first letter of each word is a capital letter.
    - Filter bad words: Censor the bad word with the first and the last characters still visible.
    - Camel case: The first letter of each word is a capital letter except for the first word.
    - Reverse a string: Reverse each word in a sentence
 
6. **Exercise Name: Product Manager Tool**
  - Angular Concept: Component Interactions
  - Requirements
    - Have a list of active products in one component. Let each product have a button against it that says - Active
    - Have a list of inactive products in another component. Let each product have a button against it that says - InActive
    - When an inactive product is clicked, it gets added to the parent component as active and vice-versa.

## User Interface (UI) Component Library
1. Angular Materials: https://material.angular.io/components/categories

