def normalizeDate(e):
    months = {
        '01' : "Jan",
        '02' : "Feb",
        '03' : "Mar",
        '04' : "Apr",
        '05' : "May",
        '06' : "Jun",
        '07' : "July",
        '08' : "Aug",
        '09' : "Sep",
        '10' : "Oct",
        '11' : "Nov",
        '12' : "Dec",
    }
    num_date = str(e).split()[0].split('-')
    num_month = num_date[1]
    month = months[num_month]
    num_date[1] = month
    year = num_date.pop(0)
    num_date.append(year)
    date = num_date[0] + " " + num_date[1] + ", " + num_date[2]
    return date
