# Where to eat

## To run the project

1. git clone this repo `git clone https://github.com/alelr36/what-would-ale-eat.git`
2. cd into repo folder `cd what-would-ale-eat`
3. Install dependencies `npm i`
4. Run project `npm run dev`
5. Visit the url displayed in the terminal

---

## Decision making

### Given the time constraints, I chose to deliver value with the minimum amount of features:

- Search by menu
  - Enable multi search criteria, so users can search places where they can find pastry and coffee
- Clear search
- Display basic truck info: name, menu and location description
- View specific truck on maps based on latitude and longitude

---

### Client side

Given the API available has quite flexibility, I decided to create a pure FrontEnd solution, not diving into server side rendering or anything like that.
The goal is that with a deployed version, users can use their phones to visit the page, type down what they would like to eat, find a truck and let maps app take them there.

---

### Improvements

List of features I would have liked to implement:

- Map view inside the app
  - Setting up application keys would have consumed too much time
- Filter by working hours and expiration date
  - Inform the user whether the truck is working at the moment or not
- Allow user to select AND / OR criteria when searching for several terms
  - At the moment, we use only AND, but OR can be a usecase very often,
