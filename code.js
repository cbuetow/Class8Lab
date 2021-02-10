$(document).ready(function () {
        // add event listener
        $("form#schedule").submit(daySwitch);

        // add workable function
        function daySwitch(event) {
            event.preventDefault();

            let dayValue = parseInt($(":radio:checked").val());

            if (dayValue === 1)
            {
                $("p#scheduleEachDay").text("Today is Monday");
            }
            else if (dayValue === 2)
            {
                $("p#scheduleEachDay").text("Today is Tuesday");
            }
            else if (dayValue === 3)
            {
                $("p#scheduleEachDay").text("Today is Wednesday");
            }
            else if (dayValue === 4)
            {
                $("p#scheduleEachDay").text("Today is Thursday");
            }
            else if (dayValue === 5)
            {
                $("p#scheduleEachDay").text("Today is Friday");
            }
            else if (dayValue === 6)
            {
                $("p#scheduleEachDay").text("Today is Saturday");
            }
            else if (dayValue === 7)
            {
                $("p#scheduleEachDay").text("Today is Sunday");
            }


        }

    }
);