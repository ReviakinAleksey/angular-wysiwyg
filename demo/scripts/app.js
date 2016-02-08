var app = angular.module('app', ['colorpicker.module', 'wysiwyg.module'])

app.controller('MyCtrl', function($scope) {
    $scope.data = {
        text: "hello"
    };
    $scope.disabled = false;
    $scope.customElements = {
        'insert-content': {
            tag: 'button',
            classes: 'btn btn-default',
            attributes: [{
                name: 'title',
                value: 'Insert'
            }, {
                name: 'ng-click',
                value: 'showInsertAlert()'
            }, {
                name: 'type',
                value: 'button'
            }],
            data: [{
                tag: 'i',
                classes: 'fa fa-link'
            }]
        }
    };

    $scope.customFunctions = {
        showInsertAlert: function (controller) {
            alert('Custom button handler');
            controller.focus();
            controller.format('insertText', 'Custom text insert');
        }
    };

    $scope.menu = [
        ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
        ['format-block'],
        ['font'],
        ['font-size'],
        ['font-color', 'hilite-color'],
        ['remove-format'],
        ['ordered-list', 'unordered-list', 'outdent', 'indent'],
        ['left-justify', 'center-justify', 'right-justify'],
        ['code', 'quote', 'paragraph'],
        ['link', 'image', 'insert-content']
    ];

    $scope.cssClasses = ['test1', 'test2'];

    $scope.setDisabled = function() {
        $scope.disabled = !$scope.disabled;
    }
});