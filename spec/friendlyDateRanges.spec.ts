import {DateRanges} from "../src/friendlyDateRanges";

describe('Friendly Date Ranges', () => {
    it('should input array of start and end dates with same year and month and return date with just start month and day and end day', () => {
        expect(DateRanges.makeNamedDates(["2016-07-01", "2016-07-04"])).toEqual(["July 1st","4th"]);
    });
    it('should input array of start and end dates with same year and return date with start year month and day and end month and day', () => {
        expect(DateRanges.makeNamedDates(["2017-03-01", "2017-05-05"])).toEqual(["March 1st, 2017","May 5th"]);
    });
    it('should input array of start and end dates with same year, month, day and return date with start year month and day', () => {
        expect(DateRanges.makeNamedDates(["2018-01-13", "2018-01-13"])).toEqual(["January 13th, 2018"]);
    });
    it('should input array of start and end dates with same different year and different month, day and return date with start month and day, end month and day', () => {
        expect(DateRanges.makeNamedDates(["2016-12-01", "2017-02-03"])).toEqual(["December 1st","February 3rd"]);
    });
    it('should input array of start and end dates with same different year and same month, different day and return date with start year, month and day, end month and day', () => {
        expect(DateRanges.makeNamedDates(["2022-09-05", "2023-09-04"])).toEqual(["September 5th, 2022","September 4th"]);
    });
    it('should input array of start and end dates with same different year and same month and day, and return date with start year, month and day, end year, month and day', () => {
        expect(DateRanges.makeNamedDates(["2022-09-05", "2023-09-05"])).toEqual(["September 5th, 2022","September 5th, 2023"]);
    });
    it('should input array of start and end dates with year 2 years apart, and return date with start year, month and day, end year, month and day', () => {
        expect(DateRanges.makeNamedDates(["2016-12-01", "2018-02-03"])).toEqual(["December 1st, 2016","February 3rd, 2018"]);
    });
});