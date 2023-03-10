             /***********************
        In NodeJS we only have the JSON methods.
        Beyond that you will have to bring in
        an NPM module or write your own
        custom method.
        ***********************/
        /***********************
        Deep Copy methods
        1. JSON.parse(JSON.stringify())
        2. Service Workers postMessage() onmessage
        3. History API history.pushState(obj, title) history.state
        4. Notification API new Notification("title", {data: obj} ).data
        5. Build a custom recursive function
        ***********************/
        
        let shallowArr = [123, 
            'bob', 
            true, 
            null, 
            undefined];

let deepArr = [123, 
         'bob', 
         true, 
         ['Hank', 'Brent', 'Lacy'], 
         {'Rouleau':'Dog River', 
          'Wilcox': 'Woolerton'}
        ];

let deepObj = {
'characters': ['Wanda','Davis','Emma','Karen'],
'places': ['Corner Gas','Ruby','Foo Mart'],
'grad68': false,
'seasons': 5
}
let newObj = {...deepObj};
        //newObj.places[0] = 'Ottawa'; //changed inside ref.
        //newObj.places = ['Ottawa', 'Calcutta']; //new ref
        console.log(newObj, deepObj);
        let otherObj = JSON.parse(JSON.stringify(deepObj));
        otherObj.places[0] = 'Ottawa';
        console.log(otherObj, deepObj);
      
      /*********************
        Shallow Copy Method examples
        1. arr1.slice(0)
        2. [].concat(arr1)
        3. Spread Operator
        4. Object.create({}, obj)
        5. Object.assign({}, obj)
        6. Array.from(arr1)
        *********************/
        let s = 'steve';
        let g = s;
        s = 'new value';
        //console.log(s, g);
        
        let arr = Array.from(shallowArr);
    //    let arr1 = [...shallowArr];
        shallowArr[0] = 456;
        // console.log(arr, shallowArr);