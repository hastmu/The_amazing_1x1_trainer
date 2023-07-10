
var language
var lang

language=localStorage.getItem("language")
if ( language ==  null ) {
     language="en"
}

// default is en
lang={
    "title": "The amazing 1x1 trainger...",
    "set_goals_header": "Set your goals...",
    "number_of_tasks": "How many calculations for today? (e.g. 100)",
    "reaction_goal_question": "How fast to be perfect? (e.g. 2500 equal 2500ms)",
    "on": "ON",
    "your_inputs": "Enter here your guesses...",
    "feedback_table": "Watch here your results...",
    "on": "ON",
    "on": "ON",
    "off": "OFF",
    "start": "Let's go...",
    "tt_start": "Click here to get your first/next task...",
    "set-goals": "Goals...",
    "tt_set-goals": "Click here to define your goals...",
    "reset_performance": "Reset performance table",
    "random_performance": "Randomize performance table",
    "current_results": "Current Results",
    "result_improvable": "Improvables",
    "result_good": "Good ones",
    "result_prefect": "Perfect ones",
    "current_task": "Current Task",
    "right_result": "Right Result",
    "done_well_counter": "Well done tasks",
    "task_feedback": "Task feedback",
    "show_timeout": "Show timeout for task",
    "dummy": "dummy"
}

// de
if ( language == "de" ) {

    lang={
        "title": "Der wunderbare 1 mal 1s Trainer..."
    }

} 


// set main items

function lang_set_item(item) {
    langattr=item.getAttribute("lang")
    if ( langattr == null ) {
        item.setAttribute("lang",item.innerHTML)    
        langattr=item.getAttribute("lang")
    }
    // console.log(langattr)
    item.innerHTML=lang[langattr]
    // console.log(item.innerHTML)

}

function render_lang(item) {
    if ( item == undefined ) {
        document.title=lang["title"]
        var langitems=$('lang')
        // console.log(langitems.length)
        for (let i = 0; i < langitems.length; i++) {
            lang_set_item(langitems[i])
        }    
    } else {
        // console.log(item)
        found=item.find("lang")
        lang_set_item(found[0])
    }
}

function render_langattr() {
    var langitems=$('langattr')
    // console.log(langitems.length)
    for (let i = 0; i < langitems.length; i++) {
        target=langitems[i].getAttribute("target")
        langitems[i].parentElement.setAttribute(target,lang[langitems[i].innerHTML])
        langitems[i].remove()
//        lang_set_item(langitems[i])
    }    
}
