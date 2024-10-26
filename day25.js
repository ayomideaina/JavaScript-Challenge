const languagesData = [
    { language: 'English', count: 91 },
    { language: 'French', count: 45 },
    { language: 'Arabic', count: 25 },
    { language: 'Spanish', count: 24 },
    { language: 'Portuguese', count: 9 },
    { language: 'Russian', count: 9 },
    { language: 'Dutch', count: 8 },
    { language: 'German', count: 7 },
    { language: 'Chinese', count: 5 },
    { language: 'Serbian', count: 4 }
];

const populationData = [
    { country: 'India', count: 1450935791},
    { country: 'China', count: 1419321278 },
    { country: 'USA', count: 345426571 },
    { country: 'Indonesia', count: 283487931 },
    { country: 'Pakistan', count: 251269164 },
    { country: 'Nigeria', count: 232679478 },
    { country: 'Brazil', count: 211998573 },
    { country: 'Bangladesh', count: 173562364},
    { country: 'Russia', count: 144820423 },
    { country: 'Ethopia', count: 132059767 },
    { country: 'Mexico', count: 130861007 },
];

function createChart(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';  
    
    // data.sort((a, b) => a.count - b.count);
    data.forEach(item => {
        const barContainer = document.createElement('div');
        barContainer.className = 'barcontainer';

        const label = document.createElement('span');
        label.className = 'barlabel';
        label.textContent = item.language || item.country;
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = '0';

        const value = document.createElement('span');
        value.className = 'bar-value';
        value.textContent = item.count.toLocaleString();

        barContainer.appendChild(label);
        barContainer.appendChild(bar);
        barContainer.appendChild(value);
        container.appendChild(barContainer);
        
        setTimeout(() => {
            bar.style.width = `${item.count * 5}px`;
            }, 100);
        });
    }
        
function showData(type) {
    const tablinks = document.querySelectorAll('.link');
    tablinks.forEach(btn => btn.classList.remove('active'));

    if (type === 'languages') {
        createChart(languagesData, 'languages');
        document.getElementById('languages').style.display = 'block';
        document.getElementById('population').style.display = 'none';
        // tablinks[0].classList.add('active');
    } else {
        createChart(populationData, 'population');
        document.getElementById('population').style.display = 'block';
        document.getElementById('languages').style.display = 'none';
        // tablinks[1].classList.add('active');
        }
    }
    showData('languages');