function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  if (sectionId !== 'home') {
    document.getElementById('lookOutput').style.display = 'none';
  }
}

function generateOutfit() {
  const type = document.getElementById("outfitType").value;
  const occasion = document.getElementById("dressingFor").value;
  const colorItem = document.getElementById("colorMatch").value.toLowerCase() || "blue jeans";
  const skinTone = document.getElementById("skinTone").value;

  const outfits = {
    casual: {
      daily: {
        top: ["Graphic Tee", "Cropped Hoodie", "Tank Top"],
        bottom: ["Distressed Jeans", "Shorts", "Joggers"],
        shoes: ["Sneakers", "Slip-ons", "Sandals"],
        accessories: ["Cap", "Backpack", "Sunglasses"]
      },
      party: {
        top: ["Shiny Blouse", "Off-shoulder Top", "Fitted Tee"],
        bottom: ["Leather Skirt", "Ripped Jeans", "Denim Shorts"],
        shoes: ["Platform Sneakers", "Heels", "Boots"],
        accessories: ["Choker", "Clutch", "Statement Earrings"]
      }
    },
    formal: {
      daily: {
        top: ["Blazer", "Button-up Shirt", "Turtleneck"],
        bottom: ["Slacks", "Midi Skirt", "Pleated Trousers"],
        shoes: ["Loafers", "Ankle Boots", "Ballet Flats"],
        accessories: ["Watch", "Handbag", "Scarf"]
      },
      party: {
        top: ["Silk Blouse", "Sequin Top", "Lace Shirt"],
        bottom: ["Pencil Skirt", "Tailored Pants", "Maxi Skirt"],
        shoes: ["Heels", "Wedges", "Oxfords"],
        accessories: ["Clutch", "Bracelet", "Earrings"]
      }
    }
  };

  const colorTips = {
    fair: "Pastel colors like soft blue, blush pink, light grey, and mint work great for fair skin.",
    medium: "Earth tones like olive green, mustard, and terracotta complement medium skin tones.",
    dark: "Vivid colors like royal blue, emerald green, and gold shine on dark skin tones."
  };

  document.getElementById('top').textContent = randomItem(outfits[type][occasion].top);
  document.getElementById('bottom').textContent = randomItem(outfits[type][occasion].bottom);
  document.getElementById('shoes').textContent = randomItem(outfits[type][occasion].shoes);
  document.getElementById('accessories').textContent = randomItem(outfits[type][occasion].accessories);
  document.getElementById('colorTip').textContent = colorTips[skinTone] || "Choose a skin tone to get color suggestions!";

  document.getElementById('lookOutput').style.display = 'block';
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
