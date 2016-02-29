var googleResize = 'http://images1-focus-opensocial.googleusercontent.com/gadgets/proxy';

function resizeImageURLByWidth(url){
  return googleResize+'?url='+encodeURIComponent(url)+'&resize_w='+ ( tabris.device.get("screenWidth") * tabris.device.get("scaleFactor") ) +'&container=focus';
}

module.exports = {
  resizeImageURLByWidth: resizeImageURLByWidth
};
