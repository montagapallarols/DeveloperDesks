# Developers' Desks

Elevator pitch: developers are social creatures first and foremost, and want to share pictures of their natural habitats with each other. Using this app, developers can share pictures of their desks, like and comment on other people's desks, and even annotate and add fun post-it notes to them.

- Main view: a stream of photos of developer desks
- Search by: developer name, items (tags?)
- Filter views: (default) newest, trending/popularity, near me

Possible enhancements:

- geolocating pictures, and searching by map / location

## Data model

- Developers (id, name, email, ...)
- Their desks (id, uri, developer, ...)
- Comments (id, text, posterId, deskId, ...)
- ...and more?

## API endpoints

Authentication should not be required until necessary! People should be able to browse the app until they want to comment or upload a photo of their own desk.

- Fetching the most recent 10 (or so) desks posted

  `GET /desks`

  should return something like

  ```
  {
    total: number;
    offset: number;
    limit: number;
    results: Array<{
      id: number;
      uri: string;
      developer: {
        id: number;
        name: string;
        email: string;
      };
    }>;
  }
  ```

  Optionally add the `q` query param (e.g. `?q=matias`) to search by the name of the owner of the desk.

  Optionally add other query params to sort by popularity, or get a list of "trending" desks, or get the desks of developers located near you (provided your lat/lng).

- Fetching a single desk

  `GET /desks/:deskId`

- Fetching the comments for a certain desk

  `GET /desks/:deskId/comments`

- Auth stuff: `/me`, `/login`, `/register`, e.g. similar to the coders' network.

- Posting a new desk

  `POST /desks`

  with data

  ```
  {
    uri: string;
  }
  ```

  ..and the user currently logged in is taken to be the owner of the desk.

  The frontend can upload to Cloudinary first, then make a post request to the backend with the url of the uploaded image. _(Alternatively, the backend could be help responsible for uploading the image, but that would require a bit more work to figure out.)_
