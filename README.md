# CoderCars Backend

# Questions for TA

1. Why the release_date does not show the year of data but showing 1970 ?
2. What is next() ? Normally the API can work without it, why we need to have it ?
3. What is hard/soft delete?
4. Why the backend port is 8888, front end port cannot be 3000 and it said the port 3000 is already in use?
5. What is the benefit of setting mongoose.debug("true"). If it's true, where we can see it?
6. Port question in file app.js
7. The pagination should be implemented in BE or FE?

## Instructions

1. Clone the branch `template`.
2. Rename `.env.example` to `.env` and supply your own MongoDB URI or leave as is to use your local MongoDB URI.
3. Based on the provided schema, parse and import the data frorm [this dataset](https://www.kaggle.com/datasets/CooperUnion/cardataset) into your database.
4. Fill in the missing logic in the controller. Remember to consider and handle all possible errors.
5. Test and make sure it works with the provided frontend.

## Requirements

### CREATE

`POST /car`
Expected body of request:

```json=
{
    "make": "Plymouth",
    "model": "Colt",
    "release_date": 2002,
    "transmission_type": "MANUAL",
    "size": "Compact",
    "style": "Coupe",
    "price": 23000
}
```

Expected response:

```json=
{
    "message": "Create Car Successfully!",
    "car": {
        "make": "Plymouth",
        "model": "Colt",
        "release_date": 2002,
        "transmission_type": "MANUAL",
        "size": "Compact",
        "style": "Coupe",
        "price": 23000,
    }
}
```

### READ

`GET /car`

Expected response:

```json=
{
    "message": "Get Car List Successfully!",
    "cars": [
        //car objects
    ],
    "page": 1,
    // total pages
    "total": 1192
}
```

### UPDATE

`PUT /car/:id`

Expected response:

```json=
{
    "message": "Update Car Successfully!",
    {
    //car object
    }
}
```

### DELETE

`DELETE /car/:id`

Expected response:

```json=
{
    "message": "Delete Car Successfully!",
    {
    //car object
    }
}
```
