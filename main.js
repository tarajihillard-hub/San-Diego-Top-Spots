$(function () {

    $.getJSON("data.json", function (spots) {

        spots.forEach(function (spot) {

            const url =
                `https://www.google.com/maps?q=${spot.location[0]},${spot.location[1]}`;

            const row = $("<tr>");

            row.append($("<td>").text(spot.name));

            row.append($("<td>").text(spot.description));

            row.append(
                $("<td>").append(
                    $("<a>")
                        .attr("href", url)
                        .attr("target", "_blank")
                        .text("Open in Google Maps")
                )
            );

            $("#top-spots-table").append(row);

        });

    });

});