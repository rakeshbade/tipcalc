const fixtures =  {
    "fivePercent": {
        tip: 5,
        bill: 500,
        people: 10,
        tip_amt: "$2.50",
        total: "$52.50"
    },
    "tenPercent": {
        tip: 10,
        bill: 500,
        people: 10,
        tip_amt: "$5.00",
        total: "$55.00"
    },
    "fifteenPercent": {
        tip: 15,
        bill: 500,
        people: 10,
        tip_amt: "$7.50",
        total: "$57.50"
    },
    "customTip": {
        tip: 50,
        custom: true,
        bill: 500,
        people: 10,
        tip_amt: "$5.00",
        total: "$55.00"
    }
}

export default fixtures;