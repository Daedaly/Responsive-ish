$("#alternative_menu").change(function()
{
$selected = $("#alternative_menu option:selected");
window.location.href = "http://www.lingulo.com/" + $selected.val();});
<option value="contact" >Contact</option>
<div class="toggleMobile">
<span class="menu1"></span>
<span class="menu2"></span>
<span class="menu3"></span></div>
<div id="mobileMenu">
<ul>
<li><a href="javascript:void(0)">Home</a></li>
<li><a href="javascript:void(0)">Porfolio</a></li>
<li><a href="javascript:void(0)">About</a></li></ul></div>
(function ($, window, document, undefined)
{
'use strict';$(function ()
{
$("#mobileMenu").hide();
$(".toggleMobile").click(function()
{
$(this).toggleClass("active");
$("#mobileMenu").slideToggle(500);});});
$(window).on("resize", function()
{
if($(this).width() > 500)
{
$("#mobileMenu").hide();
$(".toggleMobile").removeClass("active");
}});})(jQuery, window, document);
#mobileMenu
{
position: fixed;
top: 0;
left: 0;
width: 100%;
display: none;}
#mobileMenu ul li
{
display:block;
background-color: #E56038;
color: #fff;
padding: 12px 0;
letter-spacing: 0.1em;
text-align: center;
text-transform: uppercase;
border-bottom: 1px solid #CC5836;}
.toggleMobile
{
display:none;}
#mobileMenu
{
display: block;
z-index: 99;}
.toggleMobile
{
position: fixed;
top: 10px;
left: 10px;
display: block;
width: 40px;
height: 36px;
cursor: pointer;
z-index: 999;}
.toggleMobile span.menu1, .toggleMobile span.menu2, .toggleMobile span.menu3
{
display: block;
position: absolute;
width: 40px;
height: 8px;
left: 0;
background: #EDA28C;
-webkit-transition: all 0.35s cubic-bezier(0.75, 0.25, 0.10, 0.95);
transition: all 0.35s cubic-bezier(0.75, 0.25, 0.10, 0.95);}
.toggleMobile span.menu1
{
top: 0;}
.toggleMobile span.menu2
{
top: 14px;}
.toggleMobile span.menu3
{
top: 28px;}
.toggleMobile.active span.menu1
{
top: 14px;
-webkit-transform: rotate(45deg);
-moz-transform: rotate(45deg);
-o-transform: rotate(45deg);
-ms-transform: rotate(45deg);
transform: rotate(45deg);
-webkit-transition: all 0.35s cubic-bezier(0.75, 0.25, 0.10, 0.95);
transition: all 0.5s cubic-bezier(0.75, 0.25, 0.10, 0.95);}
.toggleMobile.active span.menu2
{
-webkit-transform: rotate(-45deg);
-moz-transform: rotate(-45deg);
-o-transform: rotate(-45deg);
-ms-transform: rotate(-45deg);
transform: rotate(-45deg);
-webkit-transition: all 0.35s cubic-bezier(0.75, 0.25, 0.10, 0.95);
transition: all 0.5s cubic-bezier(0.75, 0.25, 0.10, 0.95);}
.toggleMobile.active span.menu3
{
opacity: 0;
-webkit-transition: opacity 0.35s cubic-bezier(0.75, 0.25, 0.10, 0.95);
transition: opacity 0.35s cubic-bezier(0.75, 0.25, 0.10, 0.95);}
