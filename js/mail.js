var nId = "0f2f5e2fd3c07d0539c7da30bcbb02c7c71e4d3c582984dd",nWidth="248px",sColor="m_mall",sText="填写您的邮件地址，订阅装修精彩内容：" ;
if(typeof(nId)!=null&&typeof(sColor)!=null&&typeof(nWidth)!=null&&typeof(sText)!=null)
{
document.write(
[
"<div class=\"rssbook ",sColor,
" \" style=\"width:",nWidth," \"><div class=\"info\">",sText,"</div>",
"<div class=\"mailInput clear\">",
"<form action=\"http://list.qq.com/cgi-bin/qf_compose_send\" target='_blank' method='post'>",
"<input type=\"hidden\" name=\"t\" value=\"qf_booked_feedback\">",
"<input type=\"hidden\" name=\"id\" value=\"",nId,"\">",
"<input  id=\"to\" name=\"to\" type=\"text\" class=\"rsstxt\" value=\"\"/>",
"<div class=\"rssbutton\"><input type=\"submit\" value=\"订阅\"></div>",
"</form>",
"</div></div>"].join(""));

}
else
{
alert("nId empty");
}