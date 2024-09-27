import { useState } from "react";
import moment from 'moment';


// do return value is not working so work on it 
export const RestaurantTime = () => {
    const [isOpen, setOpen] = useState<boolean>(true);

    const isOpenRestaurant = () => {
        const currentTime = moment();

        const openingTime = moment('09:00 AM', 'hh:mm A');
        const closingTime = moment('10:00 PM ', 'hh:mm A');

        // Check if current time is between opening and closing time
        if (currentTime.isBetween(openingTime, closingTime)) {
            setOpen(true);
        } else {
            setOpen(false);
        }

        console.log(`Restaurant is open: ${isOpen}`);
    };

    return (isOpen)
}


// create an array for storing all seven day dates 
export const RestaurantDate = () => {

    const [selectedDate, setSelectedDate] = useState<string>();

    let currentDate = new Date();

    let nextWeek = new Date();
    nextWeek.setDate(currentDate.getDate() + 7);

    const today = "today";
    const tomorrow = "tomorrow";
    // if i === 0 == today if i === 1 tomorrow
    for (let i = 0; i < 7; i++) {
        let date = new Date();
        date.setDate(currentDate.getDate() + i);
        let weekDay = date.toLocaleString('en-US', { weekday: 'short' });

        if (currentDate.getDate() + i === currentDate.getDate() + 0) {
            console.log(weekDay + ': ' + today);
        } else if (currentDate.getDate() + i === currentDate.getDate() + 1) {
            console.log(weekDay + ': ' + tomorrow);
        } else {
            if (i >= 2) {

                console.log(weekDay + ': ' + date.toLocaleDateString());
            }
        }
        // setSelectedDate(date.toLocaleDateString())
    }
    return (selectedDate)
}

