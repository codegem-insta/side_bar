# Side Bar in React

<p align="center"><img src="screenshots/main.png" width="50%"/></p>

### SideBar component

The main action of this component is when the icon to open the sidebar is clicked
it changes the state from `open` (isOpen = true) to `closed` (isOpen = false).

This state in turn is responsible for picking the classs for the sidebar:
- Open sidebar = `.SideBar.Active` class
- Closed sidebar = `.SideBar` class

```jsx
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prevState => !prevState);

  return (
    <>
      <Hamburger onClick={toggleSidebar} /> {/* This is the three horizontal bars that open the sidebar ( ||| ) */}

      <div className={isOpen ? `${style.SideBar} ${style.Active}` : style.SideBar}>
        {/* The button that closes the sidebar */}
        <div className={style.Close} onClick={toggleSidebar}>
          <img src={close} alt="close" />
        </div>
        
        {/* The list below can be anything you want */}
        {/* It is the main content of the sidebar */}
        <div>Home</div>
        <div>Messages</div>
        <div>Log out</div>

      </div>
    </>
  );
}
```

### CSS style

The `Sidebar` component is animated when it changed classes from `.Sidebar` to `.Sidebar.Active`. 
This animation is triggered by the css attribute `transition`. 
- When we go from `.Sidebar` to `.Sidebar.Active`, css looks at the `.Sidebar.Active` class and sees
that the position is `left: 0%` (meaning the sidebar is open) and animates it.
- When we go the other way from `.Sidebar.Active` to `.Sidebar`, css sees the position is `-100%` now 
(meaning the sidebar is hidden) and it animates it.

```css
.SideBar {
    position: fixed; /* The position should be fixed so you can see it while scrolling */
    top: 0;
    left: -100%; /* This makes the sidebar slide all the way to the left until its hidden*/
    transition: 850ms; /* Key ingridient is the `transition`, see above*/

    height: 100vh; /* This makes sure the height is equal to the window's height */
    width: 400px;
    z-index: 3; /* Make sure you have a high enough number so your sidebar is now below any other element*/
}
```

```css
.SideBar.Active {
    left: 0%; /* Fully open sidebar */
    transition: 350ms;
}
```

You can choose any style for your `.Close` button, but if you want it to float on the top-left side
of the sidebar, use this:
```css
.Close {
    position: absolute;
    top: 30px;
    left: 40px;
}
```

---

# How to install

Clone the repo
```shell
git clone <URL>
```

Cd into the cloned folder and install dependencies
```shell
cd <FOLDER>
npm install
```

Run React, this should open a page in your browser
```shell
npm run start
```

_Note:_ if you don't have `nodejs` installed go to [this link](https://nodejs.org/en/download/)