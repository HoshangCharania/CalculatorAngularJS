           afterOp=0.0;
           f_value=0.0;
           first_entry=true;
           old_value_op='add';
       angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {

        $scope.deleteAll = function(){
           afterOp=0.0;
           f_value=0.0;
           first_entry=true;
           old_value_op='add';
           $scope.value = null;
        }
        $scope.updateOperation = function(value_op){
            /* Check last operation and changes values depending on that. */
        
            f_value=Number($scope.value);
            if(value_op!="eq"){
                // ((old_value_op=="add") || (old_value_op=="eq"))
                if((f_value == null) || (f_value == undefined)){
                        return;
                }
                if((afterOp==0) && (first_entry==true)){
                    afterOp=afterOp+f_value;
                    $scope.value=null;
                    console.log(afterOp)
                    old_value_op=value_op;
                    first_entry=false;
                    return;
                  }
              if((afterOp==0) && (old_value_op=='eq')){
                  if((value_op=="mul")||(value_op=="div")){
                      afterOp=f_value
                      old_value_op=value_op;
                      $scope.value=null;
                      return;
                  }else if(value_op=="sub"){
                    afterOp=f_value
                    old_value_op=value_op;
                    $scope.value=null;
                    return;
                  }
              }
              old_value_op=value_op;
                      if(value_op=="mul"){
                        afterOp=afterOp*f_value;
                      }else if(value_op=="div"){
                          afterOp=afterOp/f_value;
                          if (!isFinite(afterOp))
                            {
                                window.location.href="infinity.html"
                            }

                      }else if(value_op=="sub"){
                          afterOp=afterOp-f_value;
                      }else if(value_op=="add"){
                        afterOp=afterOp+f_value;
                      }
                      console.log(afterOp)
                      $scope.value=null;
                  
            }
            else{
                
                      console.log(f_value);
                      if(old_value_op=="mul"){
                        afterOp=afterOp*f_value;
                      }else if(old_value_op=="div"){
                          afterOp=afterOp/f_value;
                      }else if(old_value_op=="sub"){
                          afterOp=afterOp-f_value;
                      }else if(old_value_op=="add"){
                        afterOp=afterOp+f_value;
                      }else if(afterOp==0.0){
                        $scope.value=f_value;
                        return;
                      }
                      if(!isFinite(afterOp))
                            {
                                window.location.href="infinity.html"
                            }
                      old_value_op=value_op;
                console.log("eq");
                console.log(afterOp)
                $scope.value=afterOp;
                afterOp=0;
            }
        }
        $scope.updateOutput =function(number){
            number=number.toString();
            if(($scope.value == null) || ($scope.value == undefined)){
                $scope.value="";
            }
            $scope.value =$scope.value+number;
        }

    });