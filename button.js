var mentalbutton = document.getElementById('mental');
var hungerbutton = document.getElementById('hunger');
var wildlifebutton = document.getElementById('wildlife');
var naturalbutton = document.getElementById('natural');
var familybutton = document.getElementById('family');
var sicknessbutton = document.getElementById('sickness');
var mentalinfo = document.getElementById('mentalin');
var hungerinfo = document.getElementById('hungerin');
var wildlifeinfo = document.getElementById('wildlifein');
var naturalinfo = document.getElementById('naturalin');
var familyinfo = document.getElementById('familyin');
var sicknessinfo = document.getElementById('sicknessin');

mentalbutton.addEventListener('click', function() {
  mentalinfo.style.display = 'block';
  hungerinfo.style.display = 'none';
  wildlifeinfo.style.display = 'none';
  naturalinfo.style.display = 'none';
  familyinfo.style.display = 'none';
  sicknessinfo.style.display = 'none';
});

hungerbutton.addEventListener('click', function() {
    mentalinfo.style.display = 'none';
    hungerinfo.style.display = 'block';
    wildlifeinfo.style.display = 'none';
    naturalinfo.style.display = 'none';
    familyinfo.style.display = 'none';
    sicknessinfo.style.display = 'none';
});

wildlifebutton.addEventListener('click', function() {
    mentalinfo.style.display = 'none';
    hungerinfo.style.display = 'none';
    wildlifeinfo.style.display = 'block';
    naturalinfo.style.display = 'none';
    familyinfo.style.display = 'none';
    sicknessinfo.style.display = 'none';
});
naturalbutton.addEventListener('click', function() {
    mentalinfo.style.display = 'none';
    hungerinfo.style.display = 'none';
    wildlifeinfo.style.display = 'none';
    naturalinfo.style.display = 'block';
    familyinfo.style.display = 'none';
    sicknessinfo.style.display = 'none';
});
familybutton.addEventListener('click', function() {
    mentalinfo.style.display = 'none';
    hungerinfo.style.display = 'none';
    wildlifeinfo.style.display = 'none';
    naturalinfo.style.display = 'none';
    familyinfo.style.display = 'block';
    sicknessinfo.style.display = 'none';
});
sicknessbutton.addEventListener('click', function() {
    mentalinfo.style.display = 'none';
    hungerinfo.style.display = 'none';
    wildlifeinfo.style.display = 'none';
    naturalinfo.style.display = 'none';
    familyinfo.style.display = 'none';
    sicknessinfo.style.display = 'block';
});