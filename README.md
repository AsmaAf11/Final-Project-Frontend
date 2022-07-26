# pages

## Main Pages:

#### Home
##### what needs to be added:
- the search (at the navbar?)** endpoint: **http://127.0.0.1:8000/search/
- styling the page layout
- view publishers (like the categories) ** endpoint: ** (http://127.0.0.1:8000/posted_articles_per_publisher/)

------------

#### Login
##### what needs to be added:
- Add token

------------

#### View all Articles
##### what needs to be added:
- view it in cards ** endpoint: ** (http://127.0.0.1:8000/all_articles/)
- styling the page 

------------

#### View Article Details
##### what needs to be added:
- get the info from endpoint (not sure if it is the same as all_articles endpoint or it needs a new one)
-  styling the page 
- View comments  ** endpoint: ** (http://127.0.0.1:8000/view_comment/<article_id>/)
- add comments ** endpoint: ** (http://127.0.0.1:8000/add_comment/)
- delete comment ** endpoint: **  (http://127.0.0.1:8000/delete_comment/<comment_id>/)
- add to bookmark (if the user is logged in) **endpoint** (http://127.0.0.1:8000/add_bookmark/)

------------

------------

## User Pages:

#### BookMarks
##### what needs to be added:
- styling the page
- view all the articles in the bookmark **endpoint** (http://127.0.0.1:8000/all_bookmark/)
- delete a bookmark **endpoint** (http://127.0.0.1:8000/delete_bookmark/<bookmark_id>/) 

------------

------------

## Publisher Pages
#### My Articles
##### what needs to be added:
- add authorization  by getting the token for add article
- update article **endpoint** (http://127.0.0.1:8000/update_article/<article_id>/)
- delete article **endpoint** ( http://127.0.0.1:8000/delete_article/<article_id>/)