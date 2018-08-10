(function() {
  if (typeof Function.isFunction !== 'function') {
    Function.isFunction = function(value) {
      return (typeof value === 'function') ? true : false;
    };
  }

  if (!Function.isFunction(Object.isObject)) {
    Object.isObject = function(value) {
      return (typeof value === 'object' && value) ? true : false;
    };
  }

  if (!Function.isFunction(Array.isArray)) {
    Array.isArray = function(value) {
      return (Object.prototype.toString.call(value) === '[object Array]') ? true : false;
    };
  }

  if (!Function.isFunction(Boolean.isBoolean)) {
    Boolean.isBoolean = function(value) {
      return (typeof value === 'boolean') ? true : false;
    };
  }

  if (!Function.isFunction(Boolean.fromString)) {
    Boolean.fromString = function(value) {
      if (Boolean.isBoolean(value)) {
        return value;
      }

      value = (String.isString(value)) ? value.trim().toLowerCase() : 'false';

      return (value === 'true' || value === '1') ? true : false;
    };
  }

  if (!Function.isFunction(String.isString)) {
    String.isString = function(value) {
      return (typeof value === 'string') ? true : false;
    };
  }

  if (!Function.isFunction(String.trailingSlashIt)) {
    String.trailingSlashIt = function(value) {
      value = (String.isString(value)) ? value : '';

      return (value.lastIndexOf('/') === (value.length - 1)) ? value : value + '/';
    }
  }

  if (!Function.isFunction(String.untrailingSlashIt)) {
    String.untrailingSlashIt = function(value) {
      value = (String.isString(value)) ? value : '';

      return (value.lastIndexOf('/') === (value.length - 1)) ? value.substring(0, value.length - 1) : value;
    }
  }

  if (!Function.isFunction(Number.isNumber)) {
    Number.isNumber = function(value) {
      return (typeof value === 'number') ? true : false;
    };
  }

  if (!Function.isFunction(Number.isFloat)) {
    Number.isFloat = function(value) {
      var contingent = (!Number.isNumber(value)) ? parseFloat(value) : value;

      return (isFinite(contingent) && !isNaN(contingent)) ? true : false;
    };
  }

  if (!Function.isFunction(Number.isInteger)) {
    Number.isInteger = function(value) {
      return (Number.isNumber(value)) && isFinite(value) && Math.floor(value) === value;
    };
  }

  if (!Function.isFunction(Number.isValid)) {
    Number.isValid = function(value) {
      return (Number.isInteger(value) || Number.isFloat(value)) ? true : false;
    }
  }

  if (!Function.isFunction(Number.isZero)) {
    Number.isZero = function(value) {
      if (!(Number.isValid(value))) {
        return false;
      }

      return (Math.floor(parseInt(value)) === 0) ? true : false;
    }
  }

  if (!Number.isValid(Math.PIBy180)) {
    Math.PIBy180 = Math.PI / 180;
  }

  if (!Number.isValid(Math.PIBy2)) {
    Math.PIBy2 = Math.PI * 2;
  }

  if (!Function.isFunction(Math.precisionRound)) {
    Math.precisionRound = function(value, decimal){
      if (!Number.isValid(value) || Number.isZero(value)) {
        return 0;
      }

      decimal = (Number.isValid(decimal)) ? Math.abs(decimal) : 2;

      return Number(Math.round(value + 'e' + decimal) + 'e-' + decimal);
    }
  }

  if (!Function.isFunction(Math.calcRadians)) {
    Math.calcRadians = function(degrees){
      degrees = (Number.isValid(degrees)) ? degrees : 0;

      return (Number.isZero(degrees)) ? degrees : degrees * Math.PIBy180;
    }
  }

  if (!Function.isFunction(Math.calcDegrees)) {
    Math.calcDegrees = function(radians){
      radians = (Number.isValid(radians)) ? radians : 0;

      return (Number.isZero(radians)) ? radians : radians / Math.PIBy180;
    }
  }
}());