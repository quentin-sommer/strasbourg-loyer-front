# strabourg-rent-front

Rent data analysis of my hometown Strasbourg, France.

I gathered rent data for 280 days and computed several metrics every days. Now everything
is available for you to use in the `data.json` file.

This is the shape of the `data.json` file

```
[{
  id: <string> // mongodb id, unique among all the entries
  createdAt: <string> // datetime of creation. The interesting component is mostly the date part.
  data: [{
    districtId: <integer> // unique district id, ranging from 1 to 17. The 17 is special as it contains all combined districts.
    district: <string> // strings used to match rent offers into districts, joined with a comma. Ex: Grand Rue,gutenberg,kleber,broglie,hyper centre,centre historique,centre-ville
    count: <integer> // number of entries used to compute this item
    meanRent: <number> // mean monthly rent price in euro
    meanSquareRen: <number> // mean monthly square meter rent price in euro
    meanSurface: <number> // mean surface in square meter
    meanRoom: <number> // mean number room
    // contains essentially the same data as above but with offers grouped by room number. This can have different size depending on the offers available (eg: not every district has 6 rooms flats available)
    details: [{
        count: <integer> // number of entries used to compute this item
        meanRent: <number> // mean monthly rent price in euro
        meanSquareRent: <number> // mean monthly square meter rent price in euro
        meanSurface: <number> // mean surface in square meter
        room: <integer> // number of rooms, it's an integer in this array
    }]
  }]
}]
```
