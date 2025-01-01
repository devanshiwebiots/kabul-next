export const JavaData = `
    /* Sample JavaScript edit source */
    // Define a module
    var app = angular.module('app', ['ui.bootstrap']);
    // Define a conroller.
    app.controller('GrokController', ['$scope', '$filter',
        function($scope, $filter) {
            $scope.today = function() {
                $scope.dt = new Date();
            };
            $scope.today();
            $scope.isOpened = false;
            $scope.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.isOpened = true;
            };
    }]);
    /* End of sample edit source */
                    `;

export const HtmlData = `
        <!--Page header start-->
        <div class="page-header">
            <Row>
                <Col xl="6">
                    <h3>Ace Text editor</h3>
                    <small>Moscow Admin panel</small>
                </Col>
                <Col xl="6">
                    <Breadcrumb class="pull-right">
                        <BreadcrumbItem></BreadcrumbItem>
                        <BreadcrumbItem>Editor </BreadcrumbItem>
                        <BreadcrumbItem active>Ace Text editor</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
            </Row>
        </div>
        <!--Page header emd -->
`;

export const CssData = `
    .text-layer{
        font: 12px Monaco, "Courier New", monospace;
        font-size: 3vmin;
        cursor: text;
    }

    .blinker {
        animation: blink 1s linear infinite alternate;
    }

    @keyframes blink {
        0%, 40% {
          opacity: 1
        }
        40.5%, 100% {
          opacity: 1
        }
    }
             
    img[title]:before{
        content: attr(title) 
        white-space: pre;
        display: block;
        background: url(asdasd); 
    }
            
    @viewport {
        min-zoom: 1;
        max-zoom: 200%;
        user-zoom: fixed;
    }
`;

export const TypScriptData = `
    class Animal{  
            String color="white";  
    }  

    class Dog extends Animal{  
        String color="black";  
        void printColor(){  
            System.out.println(color);//prints color of Dog class  
            System.out.println(super.color);
        }    
    }  

    class TestSuper1{  
        public static void main(String args[]){  
            Dog d=new Dog();  
            d.printColor();  
        }
    }  
`;

export const LoremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros. In ornare tempus nibh ut lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.";

export const content = `Launched by a Saturn V rocket from Kennedy Space Center in Merritt Island, Florida on July 16, Apollo 11 was the fifth manned mission of NASA's Apollo program. The Apollo spacecraft had three parts: Command Module with a cabin for the three astronauts which was the only part which landed back on Earth Service Module which supported the Command Module with propulsion, electrical power, oxygen and water Lunar for on the Moon. After being sent to the Moon by the Saturn V's upper stage, the astronauts separated the spacecraft from it and travelled for three days until they entered into lunar orbit. Armstrong and Aldrin then moved into the Lunar Module and landed in the Sea of Tranquility. They stayed a total of about 21 and a half hours on the lunar surface. After lifting off in the upper part of the Lunar Module and rejoining Collins in the Command Module, they returned to Earth and landed in the Pacific Ocean on July 24. <br/><br/><br/><br/><br/>`