function calculateBMI(){
    let height= parseFloat(document.getElementById("height").value);
    let weight= parseFloat(document.getElementById("weight").value);
    let age= parseInt(document.getElementById("age").value);
    let goal= document.getElementById("goal").value;

    if(!height||!weight||!age){
        alert("Please fill the feilds!");
        return;
    }

    let bmi = (weight/((height/100)**2)).toFixed(2);
    let category="";
    if(bmi<18.5) category="UnderWeight";
    else if (bmi<25) category="Normal";
    else category="OverWeight";

     let plan = "";
       if (goal === "gain") {
           plan = "Eat more protein-rich foods like eggs, milk, nuts, and rice.";
       } else if (goal === "lose") {
              plan = "Focus on veggies, salads, soups, and avoid sugary snacks.";
       } else {
                plan = "Maintain a balanced diet with fruits, grains, and moderate exercise.";
    }
    document.getElementById("result").innerHTML = `
    <p>Your BMI: ${bmi} (${category})</p>
    <p><strong>Suggested Plan:</strong> ${plan}</p>
  `;
}

