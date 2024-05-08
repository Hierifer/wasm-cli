#include <iostream>
using namespace std;

int main(){
    // string name = "John";
    // int b = name.find("hn");
    
    // cout << "hello, world!" << endl;
    // cout << "result: " << name.substr(name.find_first_of("o")) << endl;
    // printf("result: %d\n", b);
    // 声明简单的变量
    int    i;
    double d; 
    // 声明引用变量
    int&    r = i;
    double& s = d;
 
    i = 5;
    cout << "Value of i : " << &i  << ' ' << &r << endl;
    int v = 10;
    i = v;
    cout << "Value of i : " << i  << ' ' << r << endl;
    return 0;
}