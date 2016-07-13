// Simulates a key press to avoid computer to sleep
// http://ramon.mata.com.mx
// 
// The MIT License (MIT)
// 
// Copyright (c) 2014 Ramón Mata
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// 
// 
// 

var WshShell = WScript.CreateObject("WScript.Shell");

var intButton = -1;

WScript.Echo("Start Activity Simulator");

while(intButton!=2) {
	WScript.Sleep(300000); // milliseconds - 5 minutes in this case
	WshShell.SendKeys("+");  // + Means Shift Key
	intButton = WshShell.Popup("Work is in progress! DO NOT TOUCH!",3,"DO NOT TOUCH!",0x1 + 0x40);
}
WScript.Echo("Ending Activity Simulator");
