# Day 5 Practical Assignment: Profile Card Modder 🎴

Welcome to your Day 5 Practical Assignment! Today, you will apply your knowledge of DOM manipulation to dynamically select, style, and alter the contents of a webpage profile card using pure JavaScript commands.

## ⚠️ Workflow Instructions
1. **Fork** this repository to your personal GitHub account.
2. **Clone** your personal fork to your computer using `git clone <your-forked-repo-url>`.
3. Open the project folder in VS Code and complete all tasks inside your local `script.js` file.
4. **DO NOT create a Pull Request (PR)** back to the main classroom repository. Your submission will be graded directly from your personal fork.
5. **Note:** Do not modify the hidden system parameters in this project folder. Autocomplete helper configurations have been preset for this assignment.

## 📝 Learning Objectives
* Isolate individual elements out of an HTML structure using specific selectors.
* Modify text content and inject nested HTML structural formatting via script commands.
* Interact with element class lists to safely apply complex visual styles and animations.
* Traverse parent containers through child elements using spatial tree networks.

## 🛠️ Assignment Tasks

Open your local `script.js` workspace file and fill in the missing logic rules to solve these 6 required tasks:

### TASK 1: Accessing the Document Viewport
Target the root of your active browser viewport directly using the `document.body` property. Modify its style object to change the page's background color to `#0f172a`.

### TASK 2: Targeting Unique Element IDs
Use the `document.getElementById()` selector method to capture the element labeled with the ID `"main-heading"`. Update its `.innerText` property to display your own full name.

### TASK 3: Targeting Layout Selectors
Use the `document.querySelector()` selector method to isolate the student level badge element using its class name (`.badge`). Change its background color to `"purple"` and its text color to `"white"`.

### TASK 4: Injecting Dynamic Markup Structure
Select the element labeled with the ID `"status-text"`. Use the `.innerHTML` property to rewrite the text so it displays a styled green online status notification:
* **Required format:** `Status: <span style='color: #10b981; font-weight: bold;'>ONLINE</span>`

### TASK 5: Token List Management
Use your selection engine to grab the entire card frame element (`.card-container`). Instead of editing its styles line-by-line, use the `.classList.add()` API method to instantly apply the pre-written CSS style block named `"dark-theme-card"`.

### TASK 6: Spatial Node Traversal
Select the element collection containing your skill tags using `document.getElementsByClassName()` or `document.getElementsByTagName()`. Target the first item in that collection list using an index bracket (`[0]`). From that child element, use the `.parentElement` hierarchy chain to find the main profile wrapper container and change its corner radius structure (`borderRadius`) to `"30px"`.

***

## 🚀 Testing Your Work
Save your changes inside your VS Code workspace editor, open your local `index.html` file inside any standard modern web browser view, and confirm that the profile layout visually morphs into a dark theme card instantly upon page load!
