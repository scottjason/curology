To install

```
`git clone git@github.com:scottjason/curology.git`
`yarn && yarn start`
or
`npm i && npm start`
```

Then point your browser to locahost:3000.

The app should automatically load the popular movies, then type in the search bar for "real-time search as you type" results.


--

The main challenge was pagnation- I didn't leave as much time as I probably should have for that so what's implemented is a "Next" option- what this does is simply fetch the next page of results for the search term only it doesn't account for whether or not there even is a next page- so what would have been better is to figure this out ahead of time by either:

1) Use the API to get an idea for the total number of pages for a term (didn't see anything direct perhaps could get creative)

2) When a request is made for a given page- even page 1- make the request in the background for the next page, if there isn't results you know there isn't a next page.

The second way sounds a bit expensive but if contsrained by the API it's doable.

--

The other challenge was taking into account the side effects of the above- for example the "Next" option should dissapear when there are no results- so far now its just going to continualy grab the next page when you ask for it only if there's no results it just simply render anything new (it will keep the prior results on the page).
