const yearElement = document.getElementById('year');
const listItems = document.querySelectorAll('li');
const dateTimeElement = document.getElementById('date-time')

function changeYearColor() {
    const randomColor = getRandomColor();
    yearElement.style.color = randomColor;
}
setInterval(changeYearColor, 1000);

function getRandomColor() {
    const values = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += values[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function updateDateTime() {
    const now = new Date();
    const date = now.toDateString();
    const time = now.toLocaleTimeString();
    dateTimeElement.textContent = `${date} ${time}`;
}
setInterval(updateDateTime, 1000);

function changeDateTimeBackground() {
  const timeBackgroundColor = getRandomColor();
  dateTimeElement.style.backgroundColor = timeBackgroundColor;
}
setInterval(changeDateTimeBackground, 1000);

  console.log(listItems);
  for (let i = 0; i < listItems.length; i++) {
      console.log(listItems[i]);
  }

  listItems.forEach((li, i) => {
    if (li.textContent.includes('Done')) {
       li.style.backgroundColor= 'green'
      } else if (li.textContent.includes('Ongoing')) {
       li.style.backgroundColor = 'yellow'
      } else if (li.textContent.includes('Coming')) {
        li.style.backgroundColor = 'red'; 
      }
});


