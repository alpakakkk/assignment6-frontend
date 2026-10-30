
$(document).ready(function() {
    console.log("jQuery is ready!");
    $("h1").css("letter-spacing", "-1px");
    $("#greeting").text("Welcome to My Portfolio!");
    $(".headline").css("font-weight", "600");

    $("#lightTheme").on("click", function() {
        $("body").removeClass("dark");
    });

    $("#darkTheme").on("click", function() {
        $("body").addClass("dark");
    });

    $("#hideFacts").on("click", function() {
        $("#status, #facts").hide();
    });

    $("#showFacts").on("click", function() {
        $("#status, #facts").show();
    });

    $("#toggleFacts").on("click", function() {
        $("#status, #facts").toggle();
    });

    $("#fadeIn").on("click", function() {
        $(".gallery img").stop(true, true).fadeIn();
    });

    $("#fadeOut").on("click", function() {
        $(".gallery img").stop(true, true).fadeOut();
    });

    $("#fadeToggle").on("click", function() {
        $(".gallery img").stop(true, true).fadeToggle();
    });

    $(".accordion").on("click", function() {
        $("#" + $(this).attr("data-panel")).stop(true, true).slideToggle();
    });

    $("#slideUp").on("click", function() {
        $(".panel").stop(true, true).slideUp();
    });

    $("#slideDown").on("click", function() {
        $(".panel").stop(true, true).slideDown();
    });

    function skillValue() {
        return $("#newSkill").val().trim();
    }

    $("#addSkill").on("click", function() {
        const value = skillValue();

        if (value) {
            $("#skillList").append($("<li>").text(value));
            $("#newSkill").val("");
        }
    });

    $("#prependSkill").on("click", function() {
        const value = skillValue();

        if (value) {
            $("#skillList").prepend($("<li>").text(value));
            $("#newSkill").val("");
        }
    });

    $("#removeSkill").on("click", function() {
        $("#skillList li").last().remove();
    });

    $("#changeLink").on("click", function() {
        const link = $("#socialLink");
        const github = link.attr("href") === "https://github.com/alpakakkk/";

        link.attr("href", github ? "https://www.linkedin.com/in/almanzor-kamzeyev-a32aaa438/" : "https://github.com/alpakakkk/");
        link.text(github ? "LinkedIn" : "GitHub");
        $(this).text(github ? "Change to GitHub" : "Change to LinkedIn");
    });

    $("#name, #email").on("input", function() {
        $("#liveName").text($("#name").val());
        $("#liveEmail").text($("#email").val());
    });

    $("#contactForm").on("submit", function(event) {
        event.preventDefault();
    });

    let animated = false;

    $("#animateSkills").on("click", function() {
        animated = !animated;

        $(".bar").each(function() {
            $(this).stop(true).animate({
                width: animated ? $(this).attr("data-width") : "0%"
            }, 750);
        });
    });
});
