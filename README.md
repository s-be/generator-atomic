# generator-atomic

> This [Yeoman](http://yeoman.io) generator scaffolds an atomic-design templating framework based on the markup language [Jade](http://http://jade-lang.com/).
> It comes bundled with [BabelJS](http://babeljs.io/) for ES6 support, [Twitter Bootstrap](http://getbootstrap.com/), [LESS](http://lesscss.org/), ESLint and a build-in Livereload Server. 
> Several Subgenerators (atom, molecule, organism...) help you during your project to quickly add new modules and link them properly.
> [Grunt](http://gruntjs.com/) helps you to automate your workflow with several helpful tasks like "build", "release" and "serve" (default)

[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/nexumAG/generator-atomic.svg)](http://isitmaintained.com/project/nexumAG/generator-atomic "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/nexumAG/generator-atomic.svg)](http://isitmaintained.com/project/nexumAG/generator-atomic "Percentage of issues still open")

## Installation

### Install Yeoman

```bash
npm install -g yo
```

### Install generator-atomic

To install generator-atomic from npm, run:

```bash
npm install -g generator-atomic
```

## Usage

Initiate the generator in your project folder:

```bash
yo atomic
```

To generate modules use following commands in your project folder:

```bash
yo atomic:atom
```

```bash
yo atomic:molecule
```

```bash
yo atomic:organism
```

```bash
yo atomic:template
```

```bash
yo atomic:page
```

### Directory Layout
```
├── □ app                                   
|   ├── □ 0_basics                        
|   |   ├── _default.jade                 # Mastertemplate with HTML Header/Footer
|   |   ├── □ bootstrap                   # Twitter bootstrap
|   |   ├── controller.js                 # Javascript Main Controller 
|   |   ├── de.json                       # Content json  
|   |   ├── ie9.less                      # Fallback CSS for IE9
|   |   ├── main.less                     # Less-file for Module imports
|   |   ├── nojs.less                     # Fallback CSS for Browsers without JS
|   |   ├── □ nx helpers                  # Less Helper Classes
|   |   └── variables.less                # Less Variables
|   ├── □ 1_atoms                         # Folder for Atoms
|   |   ├── index.jade                    # Overviewpage for atoms 
|   |   └── □ link                        # Example for Atom with basic file structure 
|   |       ├── link.jade                  
|   |       └── _link.less                  
|   ├── □ 2_molecules                     # Folder for Molecules
|   |   ├── index.jade                    # Overviewpage for Molecules
|   |   └── □ breadcrumb                  # Example for Molecules with basic file structure
|   |       ├── breadcrumb.jade              
|   |       ├── _breadcrumb.jade          
|   |       ├── breadcrumb.js            
|   |       ├── breadcrumb.less          
|   |       └── breadcrumb.spec          
|   ├── □ 3_organisms                     # Folder for Organisms
|   |   ├── index.jade                    # Overviewpage for Organisms
|   |   └── □ header                      # Example for Organisms with basic file structure
|   |       ├── header.jade               
|   |       ├── _header.jade              
|   |       ├── header.js                
|   |       ├── header.less              
|   |       └── header.spec               
|   ├── □ 4_templates                     # Folder for Templates
|   |   ├── index.jade                    # Overviewpage for Templates
|   |   └── □ templatehomepage            # Example for Templates with basic file structure
|   |       ├── templatehomepage.jade     
|   |       └── templatehomepage.spec     
|   └── □ 5_pages                         # Folder for Pages
|       ├── index.jade                    # Overviewpage for Pages 
|       └── □ homepage                    # Example for Pages with basic file structure
|           ├── homepage.jade             
|           └── homepage.spec             
├── □ dist                                # Folder for build output
```

## Contributing

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'feat(filename): add my-new-feature...'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

Thank you for your time, we appreciate it.

## License

MIT Licence
Copyright © 2015  Michael Seel, nexum AG

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
