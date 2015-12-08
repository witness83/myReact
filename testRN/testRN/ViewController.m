//
//  ViewController.m
//  testRN
//
//  Created by witness on 15/11/26.
//  Copyright © 2015年 witness. All rights reserved.
//

#import "ViewController.h"
#import "RCTRootView.h"

@interface ViewController ()
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
  NSURL *jsCodeLocation;
    jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
    
    /**
     * OPTION 2
     * Load from pre-bundled file on disk. The static bundle is automatically
     * generated by "Bundle React Native code and images" build step.
     */
    
    //   jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"SimpleApp"
                                                 initialProperties:nil
                                                     launchOptions:nil];

	[self.view addSubview:rootView];
	rootView.frame = self.view.frame;

	//[[RCTRootView alloc] initWithBundleURL:jsCodeLocation
//	                                                    moduleName: @"SimpleApp"
//	                                                 launchOptions:nil];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
