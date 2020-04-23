package com.walmartlabs.ern.propviewerminiapp;

import android.app.Application;

import com.walmartlabs.ern.container.ElectrodeReactContainer;
import com.walmartlabs.ern.propviewerminiapp.RunnerConfig;

public class MainApplication extends Application {

  @Override
  public void onCreate() {
    super.onCreate();

    ElectrodeReactContainer.initialize(
            this,
            new ElectrodeReactContainer.Config().isReactNativeDeveloperSupport(RunnerConfig.RN_DEV_SUPPORT_ENABLED)
            /* Add your additional plugins configuration here */);
  }

}
