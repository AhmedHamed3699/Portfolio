
const filter = (category, id) => {
    const items = document.querySelectorAll(".project-card");
    const cur_btn = document.getElementById(id);
    document.querySelector('.active-btn').classList.remove('active-btn');
    cur_btn.classList.add('active-btn');
    
    items.forEach((item) => {
        if (category === "all")
            item.style.display = "block";
        else {
            if (item.classList.contains(category))
                item.style.display = "block";
            else
                item.style.display = "none";
        }
    });
};