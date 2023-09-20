const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage)

function navToggle()
{
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle('show-menu');
}

function scrollPage()
{
    const scrollPos = window.scrollY;
    if (scrollPos > 110 && !scrollStarted)
    {
        countUp();
        scrollStarted = true;
    }
    else if(scrollPos < 110)
    {
        reset();
        scrollStarted = false;
    }
}

function countUp()
{
    counters.forEach((counter) =>
    {
        counter.innerText = '0';

        const updateCounter = () => 
        {
            //GET COUNT TARGET
            const target = +counter.getAttribute('data-target');
            //GET CURRENT COUNTER VALUE
            const counterVal = +counter.innerText;

            //CREATE AN INCREMENT
            const increment = target/100;

            //IF COUNTER IS LESS THAN TARGET, INCREMENT COUNTER
            if (counterVal < target)
            {
                //ADD DECIMAL INCREMENT TO COUNT & USE CEILING TO ROUND UP COUNTER
                counter.innerText = `${Math.ceil(counterVal + increment)}`;

                setTimeout(updateCounter, 55);
            }

            else
            {
                counter.innerText = target;
            }
        }

        updateCounter();
    });
}


function reset()
{
    counters.forEach((counter) => counter.innerHTML = 0);
}