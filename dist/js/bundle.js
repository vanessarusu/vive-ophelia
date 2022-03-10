/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_registrationForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/registrationForm */ "./src/js/components/registrationForm.js");
/* harmony import */ var _components_customLightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/customLightbox */ "./src/js/components/customLightbox.js");



(function () {
  var rf = Object(_components_registrationForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var cl = Object(_components_customLightbox__WEBPACK_IMPORTED_MODULE_1__["default"])();
  rf.init();
  cl.init();
  var preventDefaultLinks = document.querySelectorAll('.prevent-default a');

  if (preventDefaultLinks.length) {
    preventDefaultLinks.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
      });
    });
  }

  console.log('web design by lwdg.ca. development by vanessarusu.com');
})();

/***/ }),

/***/ "./src/js/components/customLightbox.js":
/*!*********************************************!*\
  !*** ./src/js/components/customLightbox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var customLightbox = function customLightbox() {
  function addEventListeners() {
    document.querySelectorAll('.register-link').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        launchLightbox();
      });
    });
    document.querySelectorAll('.lightbox-dismiss').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        dismissLightbox();
      });
    });
  }

  function launchLightbox() {
    var lightboxForm = document.querySelector('#lightboxForm');

    if (!lightboxForm) {
      return;
    }

    document.querySelector('body').classList.add('modal-open');
    lightboxForm.classList.add('lightbox-open');
    console.log('hiiii');
    document.addEventListener("keyup", function (e) {
      if (e.key == 'Escape') {
        dismissLightbox();
      }
    });
    gsap.fromTo(lightboxForm, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.15
    });
  }

  function dismissLightbox() {
    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('#lightboxForm').classList.remove('lightbox-open');
  }

  function init() {
    addEventListeners();
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (customLightbox);

/***/ }),

/***/ "./src/js/components/registrationForm.js":
/*!***********************************************!*\
  !*** ./src/js/components/registrationForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var registrationForm = function registrationForm(el) {
  function dropdown() {
    var selectNodes = document.querySelectorAll('select');

    if (!selectNodes.length) {
      return;
    }

    for (var i = 0; i < selectNodes.length; i++) {
      // run for each select node
      var currentSelect = selectNodes[i];
      var liMarkup = '';
      var options = selectNodes[i].options;
      var currentSelectionText = currentSelect.options[selectNodes[i].selectedIndex].text;

      if (currentSelect.options[selectNodes[i].selectedIndex].classList.contains('empty')) {
        currentSelectionText = '';
      }

      for (var j = 0; j < options.length; j++) {
        var addEmpyClass = options[j].className === 'empty' ? 'empty' : '';
        var item = '<li class="dropdown-item ' + addEmpyClass + '"><a tabindex="0" href="#"data-dd="' + currentSelect.getAttribute("id") + '" data-value="' + options[j].getAttribute('value') + '">' + options[j].innerHTML + '</a></li>';
        liMarkup += item;
      }

      var html = '<div class="custom-dropdown"><p class="selected-option"><span class="text">' + currentSelectionText + '</span><span class="arrow"></span></p><ul class="dd-container">' + liMarkup + '</ul></div>';
      selectNodes[i].insertAdjacentHTML('afterend', html);
    }

    document.querySelectorAll('.custom-dropdown .selected-option').forEach(function (el) {
      el.addEventListener('click', openDropdown);
    }); // click on dropdown element

    document.querySelectorAll('.dropdown-item a').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var findSelect = this.getAttribute('data-dd');
        var originalSelect = document.querySelector("#" + findSelect);
        updateOriginalSelect(this, originalSelect);
        updateLabel(this, originalSelect);
        closeDropdown();
      });
    });
  }

  function updateLabel(clickedEl, originalSelect) {
    var labelTextNode = originalSelect.nextElementSibling.querySelector('.selected-option .text');
    labelTextNode.innerHTML = clickedEl.innerHTML;
  }

  function updateOriginalSelect(clickedEl, originalSelect) {
    for (var i = 0; i < originalSelect.options.length; i++) {
      if (originalSelect.options[i].getAttribute('value') === clickedEl.getAttribute('data-value')) {
        originalSelect.options[i].setAttribute('selected', true);
      } else {
        originalSelect.options[i].removeAttribute('selected');
      }
    }
  }

  function closeDropdown() {
    document.querySelectorAll('ul.dd-container').forEach(function (el) {
      el.classList.add('dd-closed');
      el.classList.remove('dd-open');
      document.removeEventListener('click', checkForOutsideClick);
      var dds = document.querySelectorAll('.custom-dropdown .selected-option');

      for (var i = 0; i < dds.length; i++) {
        dds[i].removeEventListener('click', closeDropdown);
      }
    });
  }

  function openDropdown() {
    this.nextElementSibling.classList.add('dd-open');
    document.addEventListener('click', checkForOutsideClick);
    var dds = document.querySelectorAll('.custom-dropdown .selected-option');

    for (var i = 0; i < dds.length; i++) {
      dds[i].addEventListener('click', closeDropdown);
    }
  }

  function checkForOutsideClick(e) {
    if (document.querySelectorAll('ul.dd-container.dd-open')) {
      if (!(e.target.tagName == 'A' || e.target.tagName == 'SPAN' || e.target.tagName == 'P')) {
        closeDropdown();
      }
    }
  }

  return {
    init: dropdown
  };
};

/* harmony default export */ __webpack_exports__["default"] = (registrationForm);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jdXN0b21MaWdodGJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yZWdpc3RyYXRpb25Gb3JtLmpzIl0sIm5hbWVzIjpbInJmIiwicmVnaXN0cmF0aW9uRm9ybSIsImNsIiwiY3VzdG9tTGlnaHRib3giLCJpbml0IiwicHJldmVudERlZmF1bHRMaW5rcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImZvckVhY2giLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJsYXVuY2hMaWdodGJveCIsImRpc21pc3NMaWdodGJveCIsImxpZ2h0Ym94Rm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJrZXkiLCJnc2FwIiwiZnJvbVRvIiwib3BhY2l0eSIsImR1cmF0aW9uIiwicmVtb3ZlIiwiZHJvcGRvd24iLCJzZWxlY3ROb2RlcyIsImkiLCJjdXJyZW50U2VsZWN0IiwibGlNYXJrdXAiLCJvcHRpb25zIiwiY3VycmVudFNlbGVjdGlvblRleHQiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsImNvbnRhaW5zIiwiaiIsImFkZEVtcHlDbGFzcyIsImNsYXNzTmFtZSIsIml0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJodG1sIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwib3BlbkRyb3Bkb3duIiwiZmluZFNlbGVjdCIsIm9yaWdpbmFsU2VsZWN0IiwidXBkYXRlT3JpZ2luYWxTZWxlY3QiLCJ1cGRhdGVMYWJlbCIsImNsb3NlRHJvcGRvd24iLCJjbGlja2VkRWwiLCJsYWJlbFRleHROb2RlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrRm9yT3V0c2lkZUNsaWNrIiwiZGRzIiwidGFyZ2V0IiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUdBLENBQUMsWUFBWTtBQUNYLE1BQU1BLEVBQUUsR0FBR0MsNEVBQWdCLEVBQTNCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQywwRUFBYyxFQUF6QjtBQUVBSCxJQUFFLENBQUNJLElBQUg7QUFDQUYsSUFBRSxDQUFDRSxJQUFIO0FBRUYsTUFBSUMsbUJBQW1CLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsb0JBQTFCLENBQTFCOztBQUVBLE1BQUdGLG1CQUFtQixDQUFDRyxNQUF2QixFQUErQjtBQUMzQkgsdUJBQW1CLENBQUNJLE9BQXBCLENBQTRCLFVBQUFD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QUl3QixDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUc2QixHQUFHLENBQUNwRCxNQUFyQixFQUE2QnVCLENBQUMsRUFBOUIsRUFBa0M7QUFDOUI2QixTQUFHLENBQUM3QixDQUFELENBQUgsQ0FBT3BCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDeUMsYUFBakM7QUFDSDtBQUNSOztBQUVELFdBQVNPLG9CQUFULENBQThCL0MsQ0FBOUIsRUFBaUM7QUFDN0IsUUFBR04sUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix5QkFBMUIsQ0FBSCxFQUF5RDtBQUNyRCxVQUFHLEVBQUVLLENBQUMsQ0FBQ2lELE1BQUYsQ0FBU0MsT0FBVCxJQUFtQixHQUFuQixJQUEwQmxELENBQUMsQ0FBQ2lELE1BQUYsQ0FBU0MsT0FBVCxJQUFtQixNQUE3QyxJQUF1RGxELENBQUMsQ0FBQ2lELE1BQUYsQ0FBU0MsT0FBVCxJQUFtQixHQUE1RSxDQUFILEVBQXFGO0FBQ2pGVixxQkFBYTtBQUNoQjtBQUNKO0FBQ0o7O0FBRUQsU0FBTztBQUNIaEQsUUFBSSxFQUFFeUI7QUFESCxHQUFQO0FBR0gsQ0FoR0Q7O0FBa0dlNUIsK0VBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgcmVnaXN0cmF0aW9uRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbkZvcm1cIjtcbmltcG9ydCBjdXN0b21MaWdodGJveCBmcm9tIFwiLi9jb21wb25lbnRzL2N1c3RvbUxpZ2h0Ym94XCI7XG5cblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmYgPSByZWdpc3RyYXRpb25Gb3JtKCk7XG4gIGNvbnN0IGNsID0gY3VzdG9tTGlnaHRib3goKTtcblxuICByZi5pbml0KCk7XG4gIGNsLmluaXQoKTtcblxudmFyIHByZXZlbnREZWZhdWx0TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJldmVudC1kZWZhdWx0IGEnKTtcblxuaWYocHJldmVudERlZmF1bHRMaW5rcy5sZW5ndGgpIHtcbiAgICBwcmV2ZW50RGVmYXVsdExpbmtzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cblxuXG5cblxuICBjb25zb2xlLmxvZygnd2ViIGRlc2lnbiBieSBsd2RnLmNhLiBkZXZlbG9wbWVudCBieSB2YW5lc3NhcnVzdS5jb20nKTtcblxufSkoKTsiLCJjb25zdCBjdXN0b21MaWdodGJveCA9IChmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVnaXN0ZXItbGluaycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsYXVuY2hMaWdodGJveCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlnaHRib3gtZGlzbWlzcycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYXVuY2hMaWdodGJveCgpIHtcbiAgICAgICAgdmFyIGxpZ2h0Ym94Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWdodGJveEZvcm0nKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCFsaWdodGJveEZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIGxpZ2h0Ym94Rm9ybS5jbGFzc0xpc3QuYWRkKCdsaWdodGJveC1vcGVuJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoaWlpaScpO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKGUua2V5ID09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdzYXAuZnJvbVRvKGxpZ2h0Ym94Rm9ybSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjE1XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc21pc3NMaWdodGJveCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0Ym94Rm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Ym94LW9wZW4nKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG5cblxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUxpZ2h0Ym94OyIsImNvbnN0IHJlZ2lzdHJhdGlvbkZvcm0gPSAoZnVuY3Rpb24gKGVsKSB7XG5cbiAgICBmdW5jdGlvbiBkcm9wZG93bigpIHtcbiAgICAgICAgdmFyIHNlbGVjdE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgaWYoIXNlbGVjdE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc2VsZWN0Tm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIHJ1biBmb3IgZWFjaCBzZWxlY3Qgbm9kZVxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3QgPSBzZWxlY3ROb2Rlc1tpXTtcbiAgICAgICAgICAgIHZhciBsaU1hcmt1cCA9ICcnO1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBzZWxlY3ROb2Rlc1tpXS5vcHRpb25zO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb25UZXh0ID0gY3VycmVudFNlbGVjdC5vcHRpb25zW3NlbGVjdE5vZGVzW2ldLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbiAgICAgICAgICAgIGlmKGN1cnJlbnRTZWxlY3Qub3B0aW9uc1tzZWxlY3ROb2Rlc1tpXS5zZWxlY3RlZEluZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5JykpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2VsZWN0aW9uVGV4dCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBvcHRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFkZEVtcHlDbGFzcyA9IG9wdGlvbnNbal0uY2xhc3NOYW1lID09PSAnZW1wdHknID8gJ2VtcHR5JyA6ICcnO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJzxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gJyArYWRkRW1weUNsYXNzKyAnXCI+PGEgdGFiaW5kZXg9XCIwXCIgaHJlZj1cIiNcImRhdGEtZGQ9XCInK2N1cnJlbnRTZWxlY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikrJ1wiIGRhdGEtdmFsdWU9XCInK29wdGlvbnNbal0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKydcIj4nK29wdGlvbnNbal0uaW5uZXJIVE1MKyc8L2E+PC9saT4nO1xuICAgICAgICAgICAgICAgIGxpTWFya3VwICs9IGl0ZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJjdXN0b20tZHJvcGRvd25cIj48cCBjbGFzcz1cInNlbGVjdGVkLW9wdGlvblwiPjxzcGFuIGNsYXNzPVwidGV4dFwiPicrY3VycmVudFNlbGVjdGlvblRleHQrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImFycm93XCI+PC9zcGFuPjwvcD48dWwgY2xhc3M9XCJkZC1jb250YWluZXJcIj4nK2xpTWFya3VwKyc8L3VsPjwvZGl2Pic7XG4gICAgICAgICAgICBzZWxlY3ROb2Rlc1tpXS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbCk7IFxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRHJvcGRvd24pO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGNsaWNrIG9uIGRyb3Bkb3duIGVsZW1lbnRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0gYScpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcblxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBmaW5kU2VsZWN0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGQnKTtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2ZpbmRTZWxlY3QpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU9yaWdpbmFsU2VsZWN0KHRoaXMsIG9yaWdpbmFsU2VsZWN0KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVMYWJlbCh0aGlzLCBvcmlnaW5hbFNlbGVjdCk7XG4gICAgICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGFiZWwoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkgeyAgICAgICAgXG4gICAgICAgIHZhciBsYWJlbFRleHROb2RlID0gb3JpZ2luYWxTZWxlY3QubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1vcHRpb24gLnRleHQnKTtcbiAgICAgICAgbGFiZWxUZXh0Tm9kZS5pbm5lckhUTUwgPSBjbGlja2VkRWwuaW5uZXJIVE1MO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU9yaWdpbmFsU2VsZWN0KGNsaWNrZWRFbCwgb3JpZ2luYWxTZWxlY3QpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09PSBjbGlja2VkRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VEcm9wZG93bigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwuZGQtY29udGFpbmVyJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZGQtY2xvc2VkJyk7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdkZC1vcGVuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrRm9yT3V0c2lkZUNsaWNrKTtcbiAgICAgICAgICAgIHZhciBkZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWRyb3Bkb3duIC5zZWxlY3RlZC1vcHRpb24nKTtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpIDwgZGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZGRzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEcm9wZG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlbkRyb3Bkb3duKCkge1xuICAgICAgICB0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdkZC1vcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tGb3JPdXRzaWRlQ2xpY2spO1xuICAgICAgICB2YXIgZGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJyk7XG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaSA8IGRkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRkc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRHJvcGRvd24pO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrRm9yT3V0c2lkZUNsaWNrKGUpIHtcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwuZGQtY29udGFpbmVyLmRkLW9wZW4nKSkge1xuICAgICAgICAgICAgaWYoIShlLnRhcmdldC50YWdOYW1lID09J0EnIHx8IGUudGFyZ2V0LnRhZ05hbWUgPT0nU1BBTicgfHwgZS50YXJnZXQudGFnTmFtZSA9PSdQJykpIHtcbiAgICAgICAgICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBkcm9wZG93blxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyYXRpb25Gb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==