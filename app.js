/* Question 1 */
const images = [
	"square-resize.jpg", 
	"rhombus.jpg", 
	"rectangle.jpg"
];
const captions = [
	"A",
    "B",
    "C"
];

var score = {
    que1: 0,
    que2: 0,
    que3: 0,
    que4: 0,
    que5: 0,    
} 

const container = document.getElementById("que1");

for (let i = 0; i < images.length; i++) {
	
	const imgContainer = document.createElement('div');
	
	const img = new Image();
	img.src = images[i];
	img.id = "img"+i;
	img.classList.add("slide");
	
	img.onclick = function() {
		const index = this.id.split("img")[1];
		console.log(captions[index]);
	}
	
	imgContainer.appendChild(img);
	
	const caption = document.createElement('p');
	caption.classList.add("caption");
	caption.textContent = captions[i];
	imgContainer.appendChild(caption);
	
	container.appendChild(imgContainer);
    
    const q1Btn = document.getElementById('que1btn');
    
    q1Btn.onclick = function() {
        const answer = document.getElementById('s1').value;
        if (answer == "A") {

            score.que1++;
            console.log(score);

            document.getElementById('Q2').style.display = "block";
            document.getElementById('Q1').style.display = "none";
        } 
        if (answer == "B") {
            document.getElementById('Q2').style.display = "block";
            document.getElementById('Q1').style.display = "none";
        } 
        if (answer == "C") {
            document.getElementById('Q2').style.display = "block";
            document.getElementById('Q1').style.display = "none";
        } 
    };
};

/* Question 2 */
const images2 = [
	"rhombus2-resize.jpg", 
	"pentagon-resize.jpg", 
	"building-resize.jpg"
];

const container2 = document.getElementById("que2");

for (let i = 0; i < images.length; i++) {
	
	const imgContainer2 = document.createElement('div');
	
	const img2 = new Image();
	img2.src = images2[i];
	img2.id = "img"+i;
	img2.classList.add("slide");
	
	img2.onclick = function() {
		const index = this.id.split("img")[1];
		console.log(captions[index]);
	}
	
	imgContainer2.appendChild(img2);
	
	const caption = document.createElement('p');
	caption.classList.add("caption");
	caption.textContent = captions[i];
	imgContainer2.appendChild(caption);
	
	container2.appendChild(imgContainer2);
    
    const q2Btn = document.getElementById('que2btn');
    
    q2Btn.onclick = function() {
        const answer = document.getElementById('s2').value;
        if (answer == "A") {
            document.getElementById('Q3').style.display = "block";
            document.getElementById('Q2').style.display = "none";
        } 
        if (answer == "B") {
            
            score.que2++;
            console.log(score);

            document.getElementById('Q3').style.display = "block";
            document.getElementById('Q2').style.display = "none";
        } 
        if (answer == "C") {
            document.getElementById('Q3').style.display = "block";
            document.getElementById('Q2').style.display = "none";
        } 
    };
}

/* Question 3 */
const images3 = [
	"stop-resize.jpg", 
	"shareroad-resize.jpg", 
	"oneway-resize.jpg"
];

const container3 = document.getElementById("que3");

for (let i = 0; i < images.length; i++) {
	
	const imgContainer3 = document.createElement('div');
	
	const img3 = new Image();
	img3.src = images3[i];
	img3.id = "img"+i;
	img3.classList.add("slide");
	
	img3.onclick = function() {
		const index = this.id.split("img")[1];
		console.log(captions[index]);
	}
	
	imgContainer3.appendChild(img3);
	
	const caption = document.createElement('p');
	caption.classList.add("caption");
	caption.textContent = captions[i];
	imgContainer3.appendChild(caption);
	
	container3.appendChild(imgContainer3);
    
    const q3Btn = document.getElementById('que3btn');
    
    q3Btn.onclick = function() {
        const answer = document.getElementById('s3').value;
        if (answer == "A") {
            
            score.que3++;
            console.log(score);

            document.getElementById('Q4').style.display = "block";
            document.getElementById('Q3').style.display = "none";
        } 
        if (answer == "B") {
            document.getElementById('Q4').style.display = "block";
            document.getElementById('Q3').style.display = "none";
        } 
        if (answer == "C") {
            document.getElementById('Q4').style.display = "block";
            document.getElementById('Q3').style.display = "none";
        } 
    };
}

/* Question 4 */
const images4 = [
	"home2-resize.jpg", 
	"home1-resize.jpg", 
	"circlehome-resize.jpg"
];

const container4 = document.getElementById("que4");

for (let i = 0; i < images.length; i++) {
	
	const imgContainer4 = document.createElement('div');
	
	const img4 = new Image();
	img4.src = images4[i];
	img4.id = "img"+i;
	img4.classList.add("slide");
	
	img4.onclick = function() {
		const index = this.id.split("img")[1];
		console.log(captions[index]);
	}
	
	imgContainer4.appendChild(img4);
	
	const caption = document.createElement('p');
	caption.classList.add("caption");
	caption.textContent = captions[i];
	imgContainer4.appendChild(caption);
	
	container4.appendChild(imgContainer4);
    
    const q4Btn = document.getElementById('que4btn');
    
    q4Btn.onclick = function() {
        const answer = document.getElementById('s4').value;
        if (answer == "A") {
            
            document.getElementById('Q5').style.display = "block";
            document.getElementById('Q4').style.display = "none";
        } 
        if (answer == "B") {
            document.getElementById('Q5').style.display = "block";
            document.getElementById('Q4').style.display = "none";
        } 
        if (answer == "C") {
            
            score.que4++;
            console.log(score);
            
            document.getElementById('Q5').style.display = "block";
            document.getElementById('Q4').style.display = "none";
        } 
    };
}

/* Question 5 */
const images5 = [
	"pyramid.jpg", 
	"structure.jpg", 
	"structure1.jpg"
];

const container5 = document.getElementById("que5");

for (let i = 0; i < images.length; i++) {
	
	const imgContainer5 = document.createElement('div');
	
	const img5 = new Image();
	img5.src = images5[i];
	img5.id = "img"+i;
	img5.classList.add("slide");
	
	img5.onclick = function() {
		const index = this.id.split("img")[1];
		console.log(captions[index]);
	}
	
	imgContainer5.appendChild(img5);
	
	const caption = document.createElement('p');
	caption.classList.add("caption");
	caption.textContent = captions[i];
	imgContainer5.appendChild(caption);
	
	container5.appendChild(imgContainer5);
    
    const q5Btn = document.getElementById('que5btn');
    
    q5Btn.onclick = function() {
        const answer = document.getElementById('s5').value;
        if (answer == "A") {
               
            score.que5++;
            console.log(score);
            
            document.getElementById('resbtn').style.display = "block";
            document.getElementById('Q5').style.display = "none";
        } 
        if (answer == "B") {
            document.getElementById('resbtn').style.display = "block";
            document.getElementById('Q5').style.display = "none";
        } 
        if (answer == "C") {
            document.getElementById('resbtn').style.display = "block";
            document.getElementById('Q5').style.display = "none";
        } 
    };
}