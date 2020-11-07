// Write that function that reverse the given string
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str){
  if(str.length === 0) return '';
  return reverse(str.slice(1)) + str[0];
}
