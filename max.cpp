#include <iostream>
#include <vector>
#include <algorithm>

int MaxPairwiseProduct(const std::vector<int>& numbers) {
    int max_product = 0;
    int n = numbers.size();

    for (int first = 0; first < n; ++first) {
        for (int second = first + 1; second < n; ++second) {
            max_product = std::max(max_product,
                numbers[first] * numbers[second]);
        }
    }

    return max_product;
}
long long Max(const std::vector<int>&numbers){
int n = numbers.size();
int max_index1 = -1;
for (int i = 0; i < n; ++i)
if ((max_index1 == -1) || (numbers[i] > numbers[max_index1]))
    max_index1 = i;
int max_index2 = -1;
for (int j = 0; j < n; ++j)
if ((j != max_index1) && ((max_index2 == -1) || (numbers[j] > numbers[max_index2])))
 max_index2 = j;
return ((long long) (numbers [max_index1])) * numbers [max_index2];
}

int main() {
    int n;
    std::cin >> n;
    std::vector<int> numbers(n);
    for (int i = 0; i < n; ++i) {
        std::cin >> numbers[i];
    }

    std::cout << Max(numbers) << "\n";
    return 0;
}
