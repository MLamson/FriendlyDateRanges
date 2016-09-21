export class DateRanges {
    static makeNamedDates(dates: any): any {

        let datesReturned: any = [];

        var startingDate = dates[0];
        var endingDate = dates[1];

        var startingYear = startingDate.split("-")[0];
        var startingMonth = startingDate.split("-")[1];
        var startingDay = startingDate.split("-")[2];

        var endingYear = endingDate.split("-")[0];
        var endingMonth = endingDate.split("-")[1];
        var endingDay = endingDate.split("-")[2];

        let monthConvertNumberToWord: any = {
            "01": "January",
            "02": "February",
            "03": "March",
            "05": "May",
            "07": "July",
            "09": "September",
            "12": "December"
        };

        let dayConvertNumberToWord: any = {
            "01": "1st",
            "03": "3rd",
            "04": "4th",
            "05": "5th",
            "13": "13th"
        };

        if (this.startAndEndYearEqual(endingYear, startingYear)) {

            if (this.monthsEqual(endingMonth, startingMonth)) {

                if (this.daysEqual(endingDay, startingDay)) {
                    this.startMonthDayYear(datesReturned, monthConvertNumberToWord, startingMonth, dayConvertNumberToWord, startingDay, startingYear);
                }
                else {
                    this.startMonthDayEndDay(datesReturned, monthConvertNumberToWord, startingMonth, dayConvertNumberToWord, startingDay, endingDay);
                }
                return datesReturned;
            }
            else {
                this.startingMonthDayYearEndingMonthDay(datesReturned, monthConvertNumberToWord, startingMonth, dayConvertNumberToWord, startingDay, startingYear, endingMonth, endingDay);
            }
            return datesReturned;

        }
        else if (this.endYearOneMoreThanStartYear(endingYear, startingYear)){

            if (this.monthsEqual(endingMonth, startingMonth)){
                if (this.daysEqual(endingDay, startingDay)) {

                    this.startingAndEndingYearMonthDay(datesReturned, monthConvertNumberToWord, startingMonth, dayConvertNumberToWord, startingDay, startingYear, endingMonth, endingDay, endingYear);
                }
                else {
                    this.startingMonthDayYearEndingMonthDay(datesReturned, monthConvertNumberToWord, startingMonth, dayConvertNumberToWord, startingDay, startingYear, endingMonth, endingDay);
                }
            }

            else
            {
                this.startingAndEndingMonthDay(datesReturned, monthConvertNumberToWord, startingMonth, dayConvertNumberToWord, startingDay, endingMonth, endingDay);
            }
            return datesReturned;
        }
        else {

            this.startingAndEndingYearMonthDay(datesReturned, monthConvertNumberToWord, startingMonth, dayConvertNumberToWord, startingDay, startingYear, endingMonth, endingDay, endingYear);

             }

        return datesReturned;
    };

    private static daysEqual(endingDay: string, startingDay: string) {
        return endingDay === startingDay;
    }

    private static monthsEqual(endingMonth: string, startingMonth: string) {
        return endingMonth === startingMonth;
    }

    private static endYearOneMoreThanStartYear(endingYear: string, startingYear: string) {
        return endingYear - startingYear === 1;
    }

    private static startAndEndYearEqual(endingYear: string, startingYear: string) {
        return endingYear - startingYear === 0;
    }

    private static startMonthDayYear(datesReturned: any, monthConvertNumberToWord: any, startingMonth: string, dayConvertNumberToWord: any, startingDay: string, startingYear: string) {
        datesReturned.push(monthConvertNumberToWord[startingMonth] + " " + dayConvertNumberToWord[startingDay] + ", " + startingYear);
    }

    private static startMonthDayEndDay(datesReturned: any, monthConvertNumberToWord: any, startingMonth: string, dayConvertNumberToWord: any, startingDay: string, endingDay: string) {
        datesReturned.push(monthConvertNumberToWord[startingMonth] + " " + dayConvertNumberToWord[startingDay]);
        datesReturned.push(dayConvertNumberToWord[endingDay]);
    }

    private static startingMonthDayYearEndingMonthDay(datesReturned: any, monthConvertNumberToWord: any, startingMonth: string, dayConvertNumberToWord: any, startingDay: string, startingYear: string, endingMonth: string, endingDay: string) {
        datesReturned.push(monthConvertNumberToWord[startingMonth] + " " + dayConvertNumberToWord[startingDay] + ", " + startingYear);
        datesReturned.push(monthConvertNumberToWord[endingMonth] + " " + dayConvertNumberToWord[endingDay]);
    }

    private static startingAndEndingMonthDay(datesReturned: any, monthConvertNumberToWord: any, startingMonth: string, dayConvertNumberToWord: any, startingDay: string, endingMonth: string, endingDay: string) {
        datesReturned.push(monthConvertNumberToWord[startingMonth] + " " + dayConvertNumberToWord[startingDay]);
        datesReturned.push(monthConvertNumberToWord[endingMonth] + " " + dayConvertNumberToWord[endingDay]);
    }

    private static startingAndEndingYearMonthDay(datesReturned: any, monthConvertNumberToWord: any, startingMonth: string, dayConvertNumberToWord: any, startingDay: string, startingYear: string, endingMonth: string, endingDay: string, endingYear: string) {
        datesReturned.push(monthConvertNumberToWord[startingMonth] + " " + dayConvertNumberToWord[startingDay] + ", " + startingYear);
        datesReturned.push(monthConvertNumberToWord[endingMonth] + " " + dayConvertNumberToWord[endingDay] + ", " + endingYear);
    }
}