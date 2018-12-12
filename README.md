To install

```
git clone git@github.com:scottjason/curology.git
yarn && yarn start
or
npm i && npm start
```

Then point your browser to locahost:3000:


The app should automatically load the popular movies, then type in the search bar for "real-time search as you type" results.

Should look like this onload:
https://www.dropbox.com/s/primo3vpactvzjb/cur.png


#### Architecture

The app is built with the presentational / container pattern such that certain components are responsible for only how something looks whereas a container acts a parent for its stateless children- it modifies redux state and binds to the appropriate values in redux needed by these children for rendering.


#### Challenges

1) The main challenge was pagnation- I didn't leave as much time as I probably should have for that so what's implemented is a "Next" option- what this does is simply fetch the next page of results for the search term only it doesn't account for whether or not there even is a next page- so what would have been better is to figure this out ahead of time by either:

- a) Use the API to get an idea for the total number of pages for a term (didn't see anything direct perhaps could get creative)

- b) When a request is made for a given page- even page 1- make the request in the background for the next page, if there isn't results you know there isn't a next page.

The second way sounds a bit expensive but if contsrained by the API it's doable.



2) The second challenge was taking into account the side effects of the above- for example the "Next" option should dissapear when there are no results- so far now its just going to continualy grab the next page when you ask for it only if there's no results it just simply render anything new (it will keep the prior results on the page).

3) The last challenge, which is really just more of the same type of issue, is an UX edge case when they clear the input field- on load it renders the popular movies when it's empty but once you start searching and empty the input field, it will continue to render whatever the result set was (it wont make a req with an empty query string for the term since that results in an error from the api).


#### Future Improvements

Definitely would construct the pagnation in a way that makes sense for the end-user experience and the api as far as "knowing ahead of time" whether there's more info to request for the user (do so via the ways I listed above).

That's the main one with the side effects- aside from that I'd improve the UI.

