var options_function = function(a, b, options){
  var default_options = {
    hoge: "hogehoge",
  };
  //extend�������̃I�u�W�F�N�g�ɑ������̃I�u�W�F�N�g��key��ǉ�����
  //key�������ꍇ��������key�̒l���㏑�������

  var hash = {};
  if(options){
    hash = _.extend(default_options, options);
  }
  var result = "";
  if(hash.fuga){
    result = a + b + hash.hoge + hash.fuga;
  }else{
    result = a + b + hash.hoge;
  }
  return result;
};

global.options_function = options_function;