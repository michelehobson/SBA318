Readme

Requirements Met:
 1. Created and used custom middleware
 2. Created and used error-handling middleware
 3. Multiple data categories
 4. Reasonable data structuring
 5. Used GET routes
 6. Utilized route parameters
 7. Adhered to the guiding principles of REST
 8. Created three views using EJS and rendered a total of eight
 9. Styled with CSS
10. Applied reasonable code organization
11. Error Free 
12. Commit Frequently
13. Readme
14. Creativity, presentation, and UE
15. Submit Link in Canvas


GitHub Link:
    https://github.com/michelehobson/SBA318.git


About my Express Server Application
Because of the difficulties I experienced with SBA308A and its usage of local storage, I decided to tackle the images. Using one view for my index page (home.ejs), weather.ejs because I needed to manipulate the sizes of those images (not sure why it didn't follow the CSS rules that the others adhered to), and template.ejs which I use to render from six other routes.

*** FIXED: 
I added links for easier navigation, but I noticed that when I render a specific record (/:id), and I click on a nav link, it returns a 404.  (E.g.):
1. localhost:1962/animals/2
2. Click on link: Landscapes
3. URL becomes: localhost:1962/animals/landscapes

I added buttons to navigate through the images, but I'm having great difficulty in determing what ejs wants. My onclick event either only fires when the view is rendered or it returns an error depending on the method (not method()) I've used.

I added a button for uploaded, but didn't code the form

I would have liked to:
1. Combined all of my data into one file and extracted what was needed
